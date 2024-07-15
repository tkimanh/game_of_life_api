const express = require("express");
const router = express.Router();

// We use the auth to secure the routes (other than / which is already secured)
const auth = require("../middlewares/auth.js");

const authRoutes = require("./auth.js");
const usersRouter = require("./users.js");
const patternRoutes = require("./patterns.js");
const configurationRoutes = require("./configurations.js");

router.use("/", authRoutes);

router.use("/users", usersRouter);
router.use("/patterns", patternRoutes);
router.use("/configurations", configurationRoutes);

module.exports = router;
