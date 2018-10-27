const router = require("express").Router();
const gmailRoutes = require("./email");

router.use("/", gmailRoutes);

module.exports = router;