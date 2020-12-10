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
const Projects = require("./models/projectData.js");

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

// // Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Error / Success Reporting
mongoose.connection.on("error", (err) =>
  console.log(err.message + "| Woah, what's up with Mongo?")
);
mongoose.connection.on("connected", () =>
  console.log("MDB connected: ", MONGODB_URI)
);
mongoose.connection.on("disconnected", () => console.log("MDB disconnected."));

// On Open-Connection to MongoDB
mongoose.connection.once("open", () => {
  console.log(`Bingo, Bongo | Connected to Mongo`);
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

// CONTACT
app.get("/contact", (req, res) => {
  res.render("Contact");
});

// INDEX | GET Request
app.get("/projects", (req, res) => {
  res.render("Index");
  // database.find({}, (err, allProjects) => ...)
});

// NEW | GET Request
app.get("/projects/new", (req, res) => {
  res.render("New");
});

// DESTROY | DELETE Request
app.delete("/projects/:id", (req, res) => {
  // database.findByIdAndDelete
});

// UPDATE | PUT Request
app.put("/projects/:id", (req, res) => {
  // database.findByIdAndUpdate()
});

// CREATE | POST Request
app.post("/projects", (req, res) => {
  // database.create()
});

// EDIT | GET Request
app.get("/projects/edit", (req, res) => {
  res.render("Edit");
  // database.findById()
});

// SHOW | GET Request
app.get("/projects/SHOW-TEMP", (req, res) => {
  res.render("Show");
  // database.findById()
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
