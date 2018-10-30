const router = require("express").Router();
const needController = require("../../../controllers/needController");

router.route("/new")
    .post(needController.new);

router.route("/:orgId")
    .get(needController.getNeeds);

router.route("/:needId")
.delete(needController.removeNeed);
module.exports = router;
