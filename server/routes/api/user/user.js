const router = require("express").Router();
const userController = require("../../../controllers/userController");
var passport = require("passport");

    router.route("/signup")
    .post(userController.create);

    router.route("/:id")
    .post(userController.update);

    router.route("/:id")
    .get(userController.get);

   /* router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})*/



router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})



module.exports = router;
