import React from "react";
import { ImageBanner } from "../../components";
import { Container, Text1, Text2, Text3, Caixinha, Fundo, TextBox } from './styles';
import { FundoBanner } from "../../assets";

function Banner2 () {
    return (
        <Container>
            <TextBox>
                <Text1> Nossos </Text1>
                <Text2> parceiros </Text2>
                <Text3> de movimento </Text3>
            </TextBox>          
            <Caixinha>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
                <ImageBanner image = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" text="Imagen Test"/>
            </Caixinha>
        </Container>
    );
}

export default Banner2;