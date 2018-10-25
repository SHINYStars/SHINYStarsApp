const router = require("express").Router();
const organizationController = require("../../../controllers/organizationController");

router.route("/signup")
    .post(organizationController.create);

router.route("/:id")
    .post(organizationController.update);

router.route("/:id")
    .get(organizationController.get);



module.exports = router;
