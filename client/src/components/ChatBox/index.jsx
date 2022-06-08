import React, { useState, useEffect } from "react";
import { ChatBoxComponent } from './styles';
import { Button } from "../Button";
import { StarSymbol } from "../../assets";
import axios from "axios";

export const ChatBox = () => {
    const [name, setName] = useState('');
    const [emailClient, setEmailClient] = useState('');
    const [message, setMessage] = useState('');
    
    const sendEmail = async (event) => {
        try {
            event.preventDefault()
            await axios.post('https://localhost:3001/email', {name, emailClient, message})
            console.log(Response);
            alert(`E-mail enviado com sucesso!`)
            setName('')
            setEmailClient('')
            setMessage('')
        } catch (error) {
            alert(`Error: ${error}`)
        }
    }

    return (
        <ChatBoxComponent>
            <div className="content">
                <h1>Manda o <span className='pink'> papo!</span></h1>
                <form onSubmit={sendEmail}>
                    <input type='text' placeholder='Nome' required='required' value={name} onChange={(e) => {setName(e.target.value);}}/>
                    <input type='email' placeholder='E-mail' required='required' value={emailClient} onChange={(e) => {setEmailClient(e.target.value);}}/>
                    <textarea type='text' placeholder='Mensagem' required='required' className="message" value={message} onChange={(e) => {setMessage(e.target.value);}}/>
                    <Button text='Enviar mensagem' width='195px' reference='' type='submit'/>
                </form>
            </div>
            <img src={StarSymbol}/>
        </ChatBoxComponent>
    );
}