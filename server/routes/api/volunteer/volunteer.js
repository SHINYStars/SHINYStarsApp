const router = require("express").Router();
const volunteerController = require("../../../controllers/volunteerController");
router.route("/signup").post(volunteerController.new);
module.exports = router;
