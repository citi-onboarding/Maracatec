import React from "react";
import { Banner1Component } from './styles';
import { ImageBanner1 } from "../../assets";


export const Banner1 = () => {
    return (
        <Banner1Component>
            <div className="content">
                <h1>Faça parte do evento de <span className='pink'>tecnologia</span> mais esperado de <span className='green'>Recife!</span></h1>
                <p>Já visse?! Tecnologia e Happy Hour no mesmo lugar.
                    O Maracatec é um evento com empresas de TI com o intuito de fortalecer e conectar o ecossistema de tecnologia local.
                    E <span className="black" >você</span> pode acompanhar tudo isso junto com a gente por nossas transmissões ao vivo.
                    Vem participar!</p>
            </div>
            <img src={ImageBanner1} />
        </Banner1Component>
    );
}