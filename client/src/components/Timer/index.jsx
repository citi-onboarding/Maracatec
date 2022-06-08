import React from "react";
import { useEffect, useState } from 'react';
import { TimerComponent } from './styles';
import { Button } from "../Button";
import axios from "axios";

export const Timer = () => {
    
    const useCountdown = (targetDate) => {
        const countDownDate = new Date(targetDate).getTime();
        const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
      
        useEffect(() => {
            const interval = setInterval(() => {
                setCountDown(countDownDate - new Date().getTime());
            }, 1000);

            return () => clearInterval(interval);
        }, [countDownDate]);
      
        return getReturnValues(countDown);
    };
      
    const getReturnValues = (countDown) => {
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        
        return [days, hours, minutes];
    };
    const CountdownTimer = ({ targetDate }) => {
        const [days, hours, minutes] = useCountdown(targetDate);
      
        if (days + hours + minutes <= 0) {
            return( 
                <div className="content">
                    <h1 className="time">Chegou a <span className="pink">hora!</span></h1>
                </div>
            ) 
        }else {
            return( 
                <div className="content">
                    <p className="days">{days}</p><p className="dots">:</p>
                    <p className="hours">{hours}</p><p className="dots">:</p>
                    <p className="minutes">{minutes}</p>
                    <p className="daysName">Dias</p>
                    <p className="hoursName">Horas</p>
                    <p className="minutesName">Minutos</p>
                    <a href= 'https://www.youtube.com/channel/UCRImnylwPm4EbVs38XjHPGQ/featured' target='_blank'><Button text='Increva-se para o evento' width='262px'/></a>
                </div>
            )
        }
    };   
    const [infos, setInfos] = useState('');


    const getInfos = async () => {
        const response = await axios.get('http://localhost:3001/timer');
        console.log(response.data);
        setInfos(response.data);
    }

    useEffect(()=>{
        getInfos();
    }, []);

    return (
        <TimerComponent>
            <h1>Contagem regressiva para nosso <span className='green'>próximo encontro</span></h1>
            <CountdownTimer targetDate={infos} />
        </TimerComponent>
    );
}