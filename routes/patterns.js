const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res) {
  try {
    const patterns = await prisma.pattern.findMany();
    res.json(patterns);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching patterns." });
  }
});

router.get("/:id", async function (req, res) {
  try {
    const pattern = await prisma.pattern.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (pattern) {
      res.json(pattern);
    } else {
      res.json({ error: "No pattern found with that ID." }).status(404);
    }
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the specified pattern.",
    });
  }
});

module.exports = router;
