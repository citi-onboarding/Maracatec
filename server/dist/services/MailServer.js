"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailServer = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const MailServer = async ({
  destinationUser,
  subjectText,
  htmlOption
}) => {
  const transporter = _nodemailer.default.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL_WILL_RECEIVE,
    subject: subjectText,
    html: htmlOption
  });
};

exports.MailServer = MailServer;