const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 6000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
