const router = require("express").Router();
const sendMailFromGmail = '../../../middlewares/gmail';

router.route('/send').post(sendEmail);

function sendEmail(req, res, next) {
  sendMailFromGmail(req, res, next);
}

module.exports = router;