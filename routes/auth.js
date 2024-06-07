const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
router.get("/", (req, res) => {
  res.send({
    message: "Hello",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userLogin = await prisma.user.findUnique({
      where: {
        username: username,
      },
      select: {
        username: true,
        password: true,
      },
    });
    if (!userLogin) {
      return res.status(401).json({ message: "Authentification échouée." });
    }

    const passwordMatch = bcrypt.compare(
      password,
      userLogin.password,
      function (err, response) {
        if (err) {
          return res.status(401).json({ message: "Authentification échouée." });
        }
        if (response) {
          const jwtToken = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          res.cookie("jwtToken", jwtToken, { httpOnly: true, secure: true });
          res.json({ jwtToken });
        } else {
          return res.status(401).json({ message: "Mauvais mot de passe" });
        }
      }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(401).json({ message: error.message });
    } else {
      return res.status(401).json({ message: "Authentification échouée." });
    }
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
      select: {
        username: true,
        password: true,
      },
    });
    if (user) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    } else {
      await prisma.user.create({
        data: {
          username: username,
          password: bcrypt.hashSync(password, 12),
        },
      });
      res.status(201).json({ message: "L'utilisateur a été créé." });
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(401).json({ message: error.message });
    } else {
      return res
        .status(401)
        .json({ message: "Création de l'utilisateur échouée." });
    }
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtToken");
  res.redirect("/");
});

module.exports = router;
