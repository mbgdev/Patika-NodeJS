const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

//Template
app.set("view engine", "ejs");


//Middlewares
app.use("/public", express.static(__dirname + "/public"));

//Rotues
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/post", (req, res) => {
  res.render('post');
});
app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/add_post", (req, res) => {
  res.render('add_post');
});




const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
