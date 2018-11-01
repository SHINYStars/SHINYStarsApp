const router = require("express").Router();
const sendMailFromGmail = require('../../../middlewares/volunteerEmail')

router.route('/send').post(sendEmail);

function sendEmail(req, res, next) {
    
}

module.exports = router;