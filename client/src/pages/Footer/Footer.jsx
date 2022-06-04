import React from "react";
import { Icone } from "../../components";
import { PainelVerde, Texts, ImagemCarangueijo } from "./styles";
import { LogoMaracatecBranca } from '../../assets';
import { Carangueijo } from '../../assets';
import { Banner1 } from '../../components'

function Footer() {
    return (
        <div>
            <ImagemCarangueijo>
                <img src={Carangueijo} alt="" />
            </ImagemCarangueijo>
            <PainelVerde>
                <Texts>
                    <div className="Logo">
                        <img src={ LogoMaracatecBranca } alt="" />
                    </div>
                    <div className="Evento">
                        <h4> Evento </h4>
                        <div className="linksEvento">
                            <a href='{Banner1}'> Home </a>
                            <a href=""> Edições </a>
                            <a href=""> Parceiros </a>
                            <a href=""> Contato </a>
                        </div>
                    </div>
                    <div className="Contato">
                        <h4> Contato </h4>
                        <p> e-mail@email.com </p>
                        <p> +55 (99) 99999-9999 </p>
                    </div>
                </Texts>    
            </PainelVerde>
        </div>    
    );
}

export default Footer;