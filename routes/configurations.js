const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res) {
  try {
    const configurations = await prisma.configuration.findMany();
    res.json(configurations);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching configurations." });
  }
});

router.get("/:id", async function (req, res) {
  try {
    const configuration = await prisma.configuration.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (configuration) {
      res.json(configuration);
    } else {
      res.json({ error: "No configuration found with that ID." }).status(404);
    }
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the specified configuration.",
    });
  }
});

module.exports = router;
