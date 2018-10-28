const router = require("express").Router();
const needRoutes = require("./need");

router.use("/", needRoutes);

module.exports = router;
