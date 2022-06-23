const express = require("express");
const path = require("path");
const {
  getOne,
  editOne,
  getAllWishList,
  getAllBeenToList,
} = require("./controllers/state.js");
const db = require("./../database/index");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/state/:id", getOne);
app.put("/state/:id", editOne);
app.get("/wish", getAllWishList);
app.get("/beeto", getAllBeenToList);

app.listen(process.env.PORT, () => {
  console.log(`success listening to ${process.env.PORT}`);
});
