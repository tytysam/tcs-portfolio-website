if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

// =======================================
//              DEPENDENCIES
// =======================================

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const BlogPosts = require("./models/blogPostData.js");

// Allows use of Heroku's port OR our own
const PORT = process.env.PORT || 3000;

// =======================================
//               VIEW ENGINE
// =======================================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// =======================================
//                DATABASE
// =======================================

// Connect to the database either via Heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error / Success Reporting
mongoose.connection.on("error", (err) =>
  console.log(err.message + "| Woah, what's up with Mongo?")
);
mongoose.connection.on("connected", () =>
  console.log(`Bingo, Bongo | Connected to Mongo`)
);

mongoose.connection.on("disconnected", () => console.log("MDB disconnected."));

// On Open-Connection to MongoDB
mongoose.connection.once("open", () => {
  console.log("MDB connection established with database.");
});

// =======================================
//               MIDDLEWARE
// =======================================
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// =======================================
//                  ROUTES
// =======================================

// HOME
app.get("/", (req, res) => {
  res.render("Home");
});

// ABOUT
app.get("/about", (req, res) => {
  res.render("About");
});

// PROJECTS
app.get("/projects", (req, res) => {
  res.render("ProjectsDisplay");
});

// THE BOYS: SUPE-R DESTRUCTION GAME ROUTE
app.get("/projects/the-boys", (req, res) => {
  res.render("TheBoys");
});

// PORTFOLIO SITE ROUTE
app.get("/projects/portfolio-design", (req, res) => {
  res.render("PortfolioDesign");
});

// AD ASTRA DIGITAL SITE ROUTE
app.get("/projects/ad-astra-digital", (req, res) => {
  res.render("AdAstra");
});

// REACT WEATHER APP ROUTE
app.get("/projects/react-weather-app", (req, res) => {
  res.render("ReactWeatherApp");
});

// LISTEN ALONG APP ROUTE
app.get("/projects/listen-along", (req, res) => {
  res.render("ListenAlong");
});

// THE HERBERY E-COMMERCE STORE ROUTE
app.get("/projects/the-herbery", (req, res) => {
  res.render("TheHerbery");
});

// *********************
// *** MORE PROJECTS ***
// *********************

// CONTACT
app.get("/contact", (req, res) => {
  res.render("Contact");
});

// INDEX | GET Request
app.get("/blog", (req, res) => {
  BlogPosts.find({}, (err, allBlogPosts) => {
    err ? res.send(err) : res.render("Index", { posts: allBlogPosts });
  });
});

// NEW | GET Request
app.get("/blog/new", (req, res) => {
  res.render("New");
});

// DESTROY | DELETE Request
app.delete("/blog/:id", (req, res) => {
  BlogPosts.findByIdAndDelete(req.params.id, (err, deletedBlogPost) => {
    err ? res.send(err) : res.redirect("/blog"), console.log(deletedBlogPost);
  });
});

// UPDATE | PUT Request
app.put("/blog/:id", (req, res) => {
  BlogPosts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBlogPost) => {
      err ? res.send(err) : res.redirect("/blog");
    }
  );
});

// CREATE | POST Request
app.post("/blog", (req, res) => {
  BlogPosts.create(req.body, (err, createdBlogPost) => {
    err ? res.send(err) : res.redirect("/blog");
  });
});

// EDIT | GET Request
app.get("/blog/:id/edit", (req, res) => {
  BlogPosts.findById(req.params.id, (err, foundBlogPost) => {
    err ? res.send(err) : res.render("Edit", { post: foundBlogPost });
  });
});

// SHOW | GET Request
app.get("/blog/:id", (req, res) => {
  BlogPosts.findById(req.params.id, (err, foundBlogPost) => {
    err ? res.send(err) : res.render("Show", { post: foundBlogPost });
  });
});

// 404: NOT FOUND
app.get("*", (req, res) => {
  res.render("NotFound");
});

// =======================================
//              LISTENER
// =======================================

app.listen(PORT, () => {
  console.log(`Dude, let's surf the interwebs | Listening on port: ${PORT}`);
});
