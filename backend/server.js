const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express(); // to create the object of the imported package
dotenv.config();

// Create API end points
app.get("/", (req, res) => {
  res.send("API is running.");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Create a web server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started successfully on ${PORT}`));
