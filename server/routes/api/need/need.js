const router = require("express").Router();
const needController = require("../../../controllers/needController");

router.route("/add")
    .post(needController.create);

router.route("/:id")
    .post(needController.update);

router.route("/:id")
    .get(needController.get);

module.exports = router;
