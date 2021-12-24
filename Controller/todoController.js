const bodyParser = require("body-parser");
const todoModel = require("../Model/todoModel.js");

module.exports.getTodo = async (req, res) => {
  try {
    const todoData = await todoModel.find({}).sort({ createdAt: -1 });
    res.render("todo", { todoData });
  } catch (err) {
    console.log(err);
  }
};

module.exports.addTodo = async (req, res) => {
  const item = req.body;
  const newTodo = new todoModel(item);
  try {
    const todoData = await newTodo.save();
    if (todoData) {
      res.json(todoData);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const updateTodo = req.body;
  try {
    const todoData = await todoModel.findByIdAndUpdate(id, updateTodo, {
      new: true,
    });
    if (todoData) {
      res.json(todoData);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateStatus = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await todoModel.findById(id);
    const mark = !item.mark;
    const newVal = { $set: { mark } };

    const todoData = await todoModel.updateOne({ _id: id }, newVal);
    if (todoData) {
      res.json(todoData);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.removeTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await todoModel.findByIdAndRemove(id);
    if (data) {
      res.json(data);
    }
  } catch (err) {
    console.log(err);
  }
};
