const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connectDB = require("./database.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();
router.get("/", (req, res) => {
  res.send({
    message: "Hello",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    connectDB.connect(async function (err) {
      const userLogin = await prisma.user.findUnique({
        where: {
          username: username,
        },
        select: {
          username: true,
          password: true,
        },
      });
      if (userLogin.length === 0) {
        console.log("🚀 ~ connection ~ userLogin:", userLogin);
        connection.release();
        return res.status(401).json({ message: "Authentification échouée." });
      }

      const passwordMatch = bcrypt.compare(password, userLogin.password);

      if (!passwordMatch) {
        connection.release();
        return res.status(401).json({ message: "Authentification échouée." });
      }
      console.log(process.env.JWT_SECRET);
      const jwtToken = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("jwtToken", jwtToken, { httpOnly: true, secure: true });
      res.json({ jwtToken });
      connectDB.end();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log("🚀 ~ router.post ~ password:", password);
  console.log("🚀 ~ router.post ~ username:", username);

  connectDB.connect(async function (err) {
    if (err) {
      console.log(err);
    }
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      select: {
        username: true,
        password: true,
      },
    });
    console.log("🚀 ~ router.post ~ user:", user);
    if (user) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    } else {
      console.log("bd");
      await prisma.user.create({
        data: {
          username: username,
          password: bcrypt.hashSync(password, 12),
        },
      });
      console.log("User created");
      connectDB.end();
      res.status(201).json({ message: "L'utilisateur a été créé." });
    }
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtToken");
  res.redirect("/");
});

module.exports = router;
