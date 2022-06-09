import React from "react";
import { Icone } from "../../components";
import { PainelVerde, Texts, ImagemCarangueijo, PainelPreto, Content } from "./styles";
import { LogoMaracatecBranca } from '../../assets';
import { Carangueijo } from '../../assets';
import { Banner1 } from '../../components';
import { TextFooter } from "../../assets";
import { Instagram1 } from '../../assets';
import { Spotify1 } from '../../assets';
import { Youtube1 } from '../../assets';

function Footer() {
    return (
        <Content>
            <ImagemCarangueijo>
                <img src={Carangueijo} alt="" />
            </ImagemCarangueijo>
            <PainelVerde>
                <Texts>
                    <div className="Logo">
                        <img src={LogoMaracatecBranca} alt="" />
                    </div>
                    <div className="Evento">
                        <h4> Evento </h4>
                        <div className="linksEvento">
                            <a href='{Banner1}'> Home </a>
                            <a href=""> Edições </a>
                            <a href=''> Parceiros </a>
                            <a href=""> Contato </a>
                        </div>
                    </div>
                    <div className="Contato">
                        <h4> Contato </h4>
                        <p>maracatec.event@gmail.com</p>
                        <p> +55 (99) 99999-9999 </p>
                    </div>
                </Texts>
            </PainelVerde>
            <PainelPreto>
                <div className="Text">
                    <img src={TextFooter} alt="" id="Imagem" />
                </div>
                <div className="SocialMidias">

                    <a href=" https://instagram.com/maracatec?igshid=YmMyMTA2M2Y=" id="instagram">
                        <div className="Imagem1">
                            <img src={Instagram1} alt="" id="instagram1" />
                        </div>
                    </a>

                    <a href="https://open.spotify.com/show/7KhJlg1dNepR1AxDruzGPJ?si=NQMQHxMtSRK1DOqz3zJEqw" id="spotify">
                        <div className="Imagem1">
                            <img src={Spotify1} alt="" id="spotify1" />
                        </div>

                    </a>

                    <a href="https://www.youtube.com/channel/UCRImnylwPm4EbVs38XjHPGQ" id="youtube">
                        <div className="Imagem1">
                            <img src={Youtube1} alt="" id="youtube1" />
                        </div>
                    </a>

                </div>
            </PainelPreto>
        </Content>
    );
}

export default Footer;