const router = require("express").Router();
const searchRoutes = require("./search");

router.use("/", searchRoutes);

module.exports = router;
