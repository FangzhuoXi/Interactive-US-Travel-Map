const express = require("express");
const path = require("path");
require("dotenv").config();
const { getOne } = require("./controllers/state.js");
const db = require("./../database/index");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/state/:id", getOne);

app.listen(process.env.PORT, () => {
  console.log(`success listening to ${process.env.PORT}`);
});
