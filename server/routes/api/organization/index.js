const router = require("express").Router();
const orgRoutes = require("./organization");

router.use("/", orgRoutes);

module.exports = router;
