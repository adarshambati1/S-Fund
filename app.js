const express = require('express');

// express app
const app = express();

const morgan = require("morgan");

const mongoose = require("mongoose");

const Blog = require("./models/blog.js");


// listen for requests

//connect to mongodb
dbURI = "mongodb+srv://treehacks23:test1234@cluster0.om4cibi.mongodb.net/Hospital_Posts?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewURLParser: true, useUnifiedTopology:true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


//middleware and static files
app.use(express.static('public'))
app.use(morgan("dev"));



// register view engine
app.set('view engine', 'ejs');
//app.set('views', 'myviews');

app.get('/', (req, res) => {
  res.render('login')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
// app.get('/blogs', (req, res) => {
//   Blog.find().sort({ createdAt: -1})
//     .then((result) => {
//       res.render("index", {title: "All Blogs", blogs: result})
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/blogs/create', (req, res) => {
//   res.render('create', { title: 'Create a new blog' });
// });

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


// <script>
//         function auth(){
//             var username = document.getElementById("username").value;
//             var password = document.getElementById("password").value;
//             if(username=="Kaiser24" && password=="Treehacks"){
//                 window.location.assign("/Users/britb/Desktop/Healthcare Website/hospital.html");
//             }
//             if(username== "Seller24" && password=="Treehacks"){
//                 window.location.assign("/Users/britb/Desktop/Healthcare Website/seller.html")
//             }
//             else{
//                 alert("Invalid. Please Try Again");
//                 return;
//             }
//         }
//     </script>

//{* <html lang="en">
// <%- include("./partials/head.ejs") %>

// <body>
//   <%- include("./partials/nav.ejs") %>

//   <div class="blogs content">
//     <h2>All Blogs</h2>

//     <% if (blogs.length > 0) { %>
//       <% blogs.forEach(blog => { %>

//         <h3 class="title"><%= blog.title %></h3>
//         <p class="snippet"><%= blog.snippet %></p>

//       <% }) %>
//     <% } else { %>
//       <p>There are no blogs to display...</p>
//     <% } %>
    
//   </div>

//   <%- include("./partials/footer.ejs") %>
// </body>
//</html> */}