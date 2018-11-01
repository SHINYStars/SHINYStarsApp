const router = require("express").Router();
const emailRoutes = require("./email");

router.use("/", emailRoutes);

module.exports = router;