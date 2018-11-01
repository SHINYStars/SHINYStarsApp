const router = require("express").Router();
const shinylistController = require("../../../controllers/shinylistController");

router.route("/")
    .post(shinylistController.create);

router.route("/:id")
    .get(shinylistController.get);

module.exports = router;
