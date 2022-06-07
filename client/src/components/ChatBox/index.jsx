import React from "react";
import { ChatBoxComponent } from './styles';
import { Button } from "../Button";
import { StarSymbol } from "../../assets";

export const ChatBox = () => {
    
    return (
        <ChatBoxComponent>
            <div className="content">
                <h1>Manda o <span className='pink'> papo!</span></h1>
                <form>
                    <input type='text' placeholder='Nome' required='required'/>
                    <input type='email' placeholder='E-mail' required='required'/>
                    <input type='text' placeholder='Mensagem' required='required' className="message"/>
                    <Button text='Enviar mensagem' width='195px' reference=''/>
                </form>
            </div>
            <img src={StarSymbol}/>
        </ChatBoxComponent>
    );
}