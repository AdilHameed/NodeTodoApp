const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./Router/todoRouter.js");

const app = express();

//db connection
const CONNECTION_URL =
  "mongodb+srv://test:test@cluster0.ww4ns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// setting up template engine
app.set("view engine", "ejs");

//setting for serving static files
app.use(express.static("./public"));

todoRouter(app);

// setting port listening
app.listen("5000", (req, res) => {
  console.log("Server is up and running");
});
