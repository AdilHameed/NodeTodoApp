const bodyParser = require("body-parser");

let todoData = []; //todo item temporary storage
let urlEncoded = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  //api for rendering todo item
  app.get("/todo", (req, res) => {
    res.render("todo", { todoData });
  });

  //api for posting todo item
  app.post("/todo", urlEncoded, (req, res) => {
    if (req.body.item) {
      todoData = [
        { item: req.body.item, id: Math.random(), mark: false },
        ...todoData,
      ];
    }
    res.json(todoData);
  });

  //api for updating todo item
  app.put("/todo/:id", urlEncoded, (req, res) => {
    const id = req.params.id;
    const updateTodo = req.body.item;
    todoData = todoData.map((data) => {
      if (String(data.id) === id) {
        data.item = updateTodo;
      }
      return data;
    });
    res.json(todoData);
  });

  //api for updating mark or unmark todo item
  app.patch("/todo/:id", (req, res) => {
    const id = req.params.id;
    todoData = todoData.map((data) => {
      if (String(data.id) === id) {
        data.mark = !data.mark;
      }
      return data;
    });
    res.json(todoData);
  });

  //api for deleting todo item
  app.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    todoData = todoData.filter((data) => String(data.id) !== id);
    res.json(todoData);
  });
};
