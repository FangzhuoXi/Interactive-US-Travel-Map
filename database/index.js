const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost/usMap");

const stateSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
  wish: {
    type: Boolean,
    required: true,
  },
  BeenTo: {
    type: Boolean,
    required: true,
  },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;
