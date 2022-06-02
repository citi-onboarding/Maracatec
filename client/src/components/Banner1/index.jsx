import React from "react";
import {Banner1Component} from './styles';
import { ImageBanner1 } from "../../assets";


export const Banner1 = () => {
    
    return (
        <Banner1Component>
            <div className="content">
                <h1>Faça parte do evento de <span className='pink'>tecnologia</span> mais esperado de <span className='green'>Recife!</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ut diam turpis dictumst adipiscing. Dis sed neque, aenean turpis vitae vel nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img src={ImageBanner1}/>
        </Banner1Component>
    );
}