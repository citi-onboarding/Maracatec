import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import {Request, Response} from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
    try{
        const {name, email, message} = request.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECIEVE,
            subjectText: "Você tem uma nova mensagem!!",
            htmlOption: `<p>
                Um usuário entrou em contato! <br>
                ${name} deixou a mensagem: "${message}"<br>
                - ${email} <br>
            <\p>`
        })

        return response.status(200).send({
            answer: "Enviado."
        })
    } catch(error){
        return response.status(500).send({
            answer: "Desculpe. Houve algum tipo de problema."
        })
    }
}

export{SendMail}