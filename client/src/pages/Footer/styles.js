import styled from "styled-components";
import { FontDescription } from "../../assets";

export const PainelVerde = styled.div`
    background-color: #00A7A2;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding: 240px;
    transform: skew(0deg, 2deg) translateY(50px);
    margin:-8px;
    margin-top: 287px;
`;

export const Texts = styled.div`
    display: flex;
    transform: skew(0deg, -2deg);

    .Evento{
        display: flex;
        flex-direction: column;
        margin-left: 204px;
        margin-right: 56px;
    }

    .Contato{
        display: flex;
        flex-direction: column;
        margin-left: 56px;
        margin-right: 134px;
        width: 154px;
    }

    h4{
        font-family: 'NES2';
        font-style: normal;
        font-size: 24px;
        color: #F1F1F1;
    }

    .Logo{
        margin-left: 45px;
        margin-right: 204px;
    }

    .linksEvento{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    a{
        @font-face {
            font-family: 'Blogger Sans';
            src: url('{FontDescription}') format('truetype');
        }
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        margin: 8px;
        font-family: 'Blogger Sans';
        font-style: normal;
        font-size: 18px;
    }
`;

export const ImagemCarangueijo = styled.div`
    position: absolute;
    width: 936px;
    height: 331px;
    left: 26%;
    top: 301%;
    z-index: 1;
`;