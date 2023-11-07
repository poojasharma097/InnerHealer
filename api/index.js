const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const User = require("./models/Users.js");
const Journal = require("./models/Journal.js");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.SECRET;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.get("/test", (req, res) => {
  res.json("testing okie");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await User.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  res.json(userDoc);
});

app.post("/login", async (req,res) => {
  const {email, password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) { 
    const passwordOk = bcrypt.compareSync(password,userDoc.password);
    if (passwordOk) {
      jwt.sign({email: userDoc.email, id: userDoc._id, name: userDoc.name}, jwtSecret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.json("password not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req,res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    })
  } else {
    res.json(null);
  }
});

app.post("/logout", (req,res) => {
  res.cookie('token', '').json(true);
});

app.post("/journals", (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    content, } = req.body;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, user) => {
      if (err) throw err;
      const journalDoc = await Journal.create({
        owner: user.id,
        title,
        content,
      });
      res.json(journalDoc);
    });
  } else {
    res.json(null);
  }
});

app.get("/user-journals", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, user) => {
      if (err) throw err;
      const { id } = user;
      res.json(await Journal.find({ owner: id }));
    });
  } else {
    res.json(null);
  }
});

app.get("/journals/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Journal.findById(id));
});

app.put("/journals", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    content,
  } = req.body;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, user) => {
      if (err) throw err;
      const journalDoc = await Journal.findById(id);
      if (user.id === journalDoc.owner.toString()) {
        journalDoc.set({
          title,
          content,
        });
        await journalDoc.save();
        res.json("ok");
      }
    });
  } else {
    res.json(null);
  }
});

app.get("/journals", async (req, res) => {
  res.json(await Journal.find());
});

app.listen(3000);