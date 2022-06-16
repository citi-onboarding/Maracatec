"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendMail = void 0;

var _MailServer = require("src/services/MailServer");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const SendMail = async (request, response) => {
  try {
    const {
      name,
      email,
      message
    } = request.body;
    await (0, _MailServer.MailServer)({
      destinationUser: process.env.EMAIL_WILL_RECIEVE,
      subjectText: "Você tem uma nova mensagem!!",
      htmlOption: `<p>
                Um usuário entrou em contato! <br>
                ${name} deixou a mensagem: "${message}"<br>
                - ${email} <br>
            <\p>`
    });
    return response.status(200).send({
      answer: "Enviado."
    });
  } catch (error) {
    return response.status(500).send({
      answer: "Desculpe. Houve algum tipo de problema."
    });
  }
};

exports.SendMail = SendMail;