const router = require("express").Router();
const needRoutes = require("./needs");

router.use("/", needRoutes);

module.exports = router;
