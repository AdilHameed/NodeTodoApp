const express = require("express");
const todoController = require("./Controller/todoController.js");

const app = express();

// setting up template engine
app.set("view engine", "ejs");

//setting for serving static files
app.use(express.static("./public"));

todoController(app);

// setting port listening
app.listen("5000", (req, res) => {
  console.log("Server is up and running");
});
