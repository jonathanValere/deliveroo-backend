require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data = require("./assets/data");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found 😱" });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server starting 🚀");
});
