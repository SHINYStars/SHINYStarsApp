const router = require("express").Router();
import { sendMailFromGmail } from '../../../middlewares/gmail';

const router = Router();

router.route('/send').post(sendEmail);

function sendEmail(req, res, next) {
  sendMailFromGmail(req, res, next);
}

export default router;
