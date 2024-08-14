const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.get("/", (_req, res) =>
  res.sendFile(path.join(__dirname, "./pages/home.html"))
);

app.get("/product", (_req, res) =>
  res.sendFile(path.join(__dirname, "./pages/product.html"))
);

app.post("/analytics", (_req, res) => {
  console.log(`Event recieved at: ${Date.now()}`);
  res.send("OK");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Running on port: ${PORT}`);
});
