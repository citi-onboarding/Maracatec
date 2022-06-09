import React, { useState, useEffect } from "react";
import { ChatBoxComponent } from './styles';
import { Button } from "../Button";
import { StarSymbol } from "../../assets";
import axios from "axios";

export const ChatBox = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    /*const sendEmail = async () => {
        //sendEmail(event);
        console.log(name, emailClient, message);
        try {
            //event.preventDefault()
            await axios.post('https://localhost:3001/email', name, emailClient, message);
            console.log(Response);
            alert(`E-mail enviado com sucesso!`)
        } catch (error) {
            alert(`Error: ${error}`)
        }
    }*/

    async function sendEmail() {
        const data = { name, email, message };
        try {
            const response = await axios.post('http://localhost:3001/email', data);
            alert(`E-mail enviado com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ChatBoxComponent   id="ContactLink">
            <div className="content">
                <h1>Manda o <span className='pink'> papo!</span></h1>
                <form>
                    <input type='text' placeholder='Nome' required='required' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type='email' placeholder='E-mail' required='required' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <textarea type='text' placeholder='Mensagem' required='required' className="message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                </form>
                <div>
                    <Button text='Enviar mensagem' width='195px' reference='' type='submit' onClick={() => sendEmail()} />
                </div>
            </div>
            <img src={StarSymbol} />
        </ChatBoxComponent>
    );
}