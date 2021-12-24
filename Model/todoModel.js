const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    item: { type: String, required: true },
    mark: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("TodoList", TodoSchema);
module.exports = todoModel;
