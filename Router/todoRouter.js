const bodyParser = require("body-parser");
const {
  getTodo,
  addTodo,
  updateTodo,
  updateStatus,
  removeTodo,
} = require("../Controller/todoController.js");

let urlEncoded = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  //api for rendering todo item
  app.get("/todo", getTodo);

  //api for posting todo item
  app.post("/todo", urlEncoded, addTodo);

  //api for updating todo item
  app.put("/todo/:id", urlEncoded, updateTodo);

  //api for updating mark or unmark todo item
  app.patch("/todo/:id", updateStatus);

  //api for deleting todo item
  app.delete("/todo/:id", removeTodo);
};
