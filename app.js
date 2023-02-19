const express = require('express');
const { matches } = require('lodash');

// express app
const app = express();
const mongoose = require("mongoose")
const Mats = require("./models/form")

const dbURI = "mongodb+srv://tree:var@cluster0.om4cibi.mongodb.net/Hosp?retryWrites=true&w=majority"
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// listen for requests

// register view engine
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded());

app.get('/hospital', (req, res) => {
  res.render('hospital', { title: 'Hospital Home Page' });
});

app.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/posts', (req, res) => {
  res.render('post', {title: 'Make New Post' });
});

app.get('/successform', (req, res) => {
  res.render('successform', {title: 'Success Form' });
});

app.get('/ENM', (req, res) => {
  res.render('ENM', {title: 'ENM' });
});

app.post("/mats", (req, res) => {
  console.log(req.body);
  req.body.Quantity_Demanded = parseInt(req.body.Quantity_Demanded);
  var today = new Date();
  const future = new Date(req.body.Date_by);
  req.body.Date_by = Math.abs(future - today);;
  req.body.Revenue = 250000000;
  req.body.Occupancy = 100;
  console.log(req.body);
  const reqMat = new Mats(req.body);

  reqMat.save()
    .then((result) => { 
      res.redirect('/successform');
    })
    .catch((err) => {
      console.log(err);
    })

 })

 app.get('/supplierpage', (req, res) => {
  res.render('supplierpage', {title: 'Supplier Page' });
});

app.get('/successpage', (req, res) => {
  res.render('successpage', {title: 'Finished Shopping' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
