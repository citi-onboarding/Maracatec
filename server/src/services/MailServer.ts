import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

type EmailConfig = {
        destinationUser: string;
        subjectText: string;
        htmlOption: string;
}

const MailServer = async({destinationUser, subjectText, htmlOption}: EmailConfig) => {
    const transporter = nodemailer.createTransport({
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
}

export { MailServer }