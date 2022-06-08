import React from "react";
import { ImageBanner } from "../../components";
import { Container, Text1, Text2, Text3, Caixinha, Fundo, PainelRoxo, TextBox } from './styles';
import { FundoBanner } from "../../assets";
import axios from 'axios';

function Banner2() {

    const getInfos = async() => {
        const response = await axios.get('')
    }

    return (
        <div>
            <PainelRoxo>
                <TextBox>
                    <Text3> Nossos </Text3>
                    <Text2> parceiros </Text2>
                    <Text3> de movimento </Text3>
                </TextBox>
                <Caixinha>
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                    <ImageBanner image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test" />
                </Caixinha>
            </PainelRoxo>
        </div>
    );
}

export default Banner2;