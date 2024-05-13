var express = require("express");
var router = express.Router();

// We use the auth to securize the routes (other than / which is already securized)
const auth = require("../middlewares/auth.js");

const authRoutes = require("./auth.js");
const usersRouter = require("./users.js");

router.use("/", authRoutes);

router.use("/users", usersRouter);

module.exports = router;
