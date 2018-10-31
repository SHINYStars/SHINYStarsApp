const router = require("express").Router();
const userController = require("../../../controllers/userController");

    router.route("/signup")
    .post(userController.create);

    router.route("/:id")
    .post(userController.update);

    router.route("/:id")
    .get(userController.get);


router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})



module.exports = router;
