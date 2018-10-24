const router = require("express").Router();
const orgRoutes = require("./organization");

router.use("/organization", orgRoutes);

module.exports = router;
