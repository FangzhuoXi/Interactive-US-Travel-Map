const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT, () => {
  console.log(`success listening to ${process.env.PORT}`);
});
