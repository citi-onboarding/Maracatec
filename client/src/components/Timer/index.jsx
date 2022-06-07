import React from "react";
import {TimerComponent} from './styles';
import { Button } from "../Button";

export const Timer = () => {
    
    return (
        <TimerComponent>
            <h1>Contagem regressiva para nosso <span className='green'>próximo encontro</span></h1>
            <div className="content">
                <p className="days">13</p><p className="dots">:</p>
                <p className="hours">20</p><p className="dots">:</p>
                <p className="minutes">52</p>
                <p className="daysName">Dias</p>
                <p className="hoursName">Horas</p>
                <p className="minutesName">Minutos</p>
                <Button text='Increva-se para o evento' width='262px' reference=''/>
            </div>
        </TimerComponent>
    );
}