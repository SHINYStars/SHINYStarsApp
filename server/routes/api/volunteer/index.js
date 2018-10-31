const router = require("express").Router();
const volunteerRoutes = require("./volunteer");
router.use("/", volunteerRoutes);

module.exports = router;