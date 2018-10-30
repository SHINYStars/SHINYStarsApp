const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user");
const authRoutes = require("./api/auth");
const orgRoutes = require("./api/organization");
const emailRoutes = require("./api/email");
const searchRoutes = require("./api/search");
const needsRoutes = require("./api/needs");

// API Routes
router.use("/api/user", userRoutes);
router.use("/api/organization", orgRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/email", emailRoutes);
router.use("/api/search", searchRoutes);
router.use("/api/needs", needsRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});




module.exports = router;
