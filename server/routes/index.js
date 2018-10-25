const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user");
const authRoutes = require("./api/auth");
const orgRoutes = require("./api/organization");


// API Routes
router.use("/api/user", userRoutes);
router.use("/api/auth", authRoutes);


// API Routes
router.use("/api", orgRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
