const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user");
const authRoutes = require("./api/auth");
const orgRoutes = require("./api/organization");
const emailRoutes = require("./api/email");
const volunteerRoutes = require("./api/volunteer")


// API Routes
router.use("/api/user", userRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/email", emailRoutes);
router.use("./api/volunteer", volunteerRoutes);


// API Routes
router.use("/api", orgRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;
