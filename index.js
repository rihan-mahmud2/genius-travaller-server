const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
const hotels = require("./data/hotels.json");
const places = require("./data/place.json");
app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/place", (req, res) => {
  res.send(places);
});

app.get("/hotels/:id", (req, res) => {
  const id = req.params.id;
  const hotel = hotels.filter((ht) => ht.id == id);
  res.send(hotel);
});

app.listen(port, () => {
  console.log("The server is listening", port);
});
