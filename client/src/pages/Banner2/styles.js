import styled from "styled-components";
import { MainFont } from "../../assets";
import { FundoBanner } from "../../assets";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F1F1F1;
    background-image: url(${FundoBanner});
    background-repeat: no-repeat;
    
`;

export const TextBox = styled.h2`
    display: flex;
    @font-face {
            font-family: 'NES2';
            src: url('{MainFont}') format('truetype');
        }
    
    margin-top: 320px;
    font-family: 'NES2';
    font-style: normal;
    font-size: 20px;
    @media(max-width: 1200px){
        width:100%;
        align-items: center;
        justify-content: center;
        margin: 405px 0 0 100px;
    }

`;

export const Text1 = styled.h2`
    margin: 5px;
    color: #F1F1F1;
`;
export const Text2 = styled.h2`
    margin: 5px;
    color: #F68224;
`;
export const Text3 = styled.h2`
    margin: 5px;
    color: #F1F1F1;
`;

export const Caixinha = styled.div`
    
    display: flex;
    padding: 30px 215px 0px 215px;
    @media(max-width: 1200px){
        width:100%;
        align-items: center;
        justify-content: center;
        margin: 405px 0 0 100px;
    }
`;

export const Fundo = styled.img`

    width: 100%;
    height: 100%;
    
`;