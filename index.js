const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur le site Deliveroo 🖐🏽" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found 😱" });
});

app.listen(port, () => {
  console.log("Server starting 🚀");
});
