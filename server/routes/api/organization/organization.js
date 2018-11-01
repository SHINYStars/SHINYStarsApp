const router = require("express").Router();
const organizationController = require("../../../controllers/organizationController");

router.route("/signup")
    .post(organizationController.create);

router.route("/get/:id")
    .get(organizationController.getOne);

router.route("/edit/")
    .put(organizationController.update);



module.exports = router;
