import React from "react";
import { Banner1Component } from './styles';
import { ImageBanner1 } from "../../assets";


export const Banner1 = () => {
    return (
        <Banner1Component>
            <div className="content">
                <h1>Faça parte do evento de <span className='pink'>tecnologia</span> mais esperado de <span className='green'>Recife!</span></h1>
                <p>O MaracaTec é um encontro com empresas de TI que aproxima e conecta pessoas da área de tecnologia, trazendo, mensalmente, diversos conteúdos sobre desenvolvimento, design, produto, proporcionando interação entre as pessoas participantes.</p>
            </div>
            <img src={ImageBanner1} />
        </Banner1Component>
    );
}