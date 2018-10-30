const router = require("express").Router();
const shinylistRoutes = require("./shinylist");

router.use("/", shinylistRoutes);

module.exports = router;