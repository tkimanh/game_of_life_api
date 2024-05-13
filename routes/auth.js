const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send({
    message: "Hello",
  });
});
router.post("/login", (req, res) => {
  // Récupération des paramètres POST (username et password)
  const { username, password } = req.body;
  if (password === "toto") {
    // Encodage du JWT via la variable d'environnement JWT_SECRET
    const jwtToken = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Stockage du JWT dans un cookie HttpOnly
    res.cookie("jwtToken", jwtToken, { httpOnly: true, secure: true });
    res.json(jwtToken);
  } else {
    res.status(401).json({ message: "Authentification échouée." });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtToken");
  res.redirect("/");
});
module.exports = router;
