import styled from "styled-components";
import { MainFont } from "../../assets";
import { FundoBanner } from "../../assets";

/*export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;*/

export const TextBox = styled.div`
    display: flex;
    transform: skew(0deg, -5deg);
    margin: 5px;
    color: #F68224;
    justify-content: center;
    @font-face {
            font-family: 'NES2';
            src: url('{MainFont}') format('truetype');
        }
    //margin-top: 320px;
    font-family: 'NES2';
    //font-style: normal;
    //font-size: 20px;
    @media(max-width: 1200px){
        width:100%;
        align-items: center;
        justify-content: center;
        margin: 405px 0 0 100px;
    }

`;

export const PainelRoxo = styled.div`
    background-color: #4B4B70;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding: 240px;
    transform: skew(0deg, 5deg) translateY(-50px);
    margin:-8px;
    margin-top: 287px;
`;

export const Text1 = styled.h2`
    bottom: 5px;
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
    transform: skew(0deg, -5deg);
    //padding: 30px 215px 0px 215px;
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