import styled from "styled-components";
import {NES2, FundoBanner} from "../../assets";

export const TextBox = styled.div`
    display: flex;
    transform: skew(0deg, -5deg);
    margin: 5px;
    color: ${(props) => props.theme.colors.orange};
    justify-content: center;
    @font-face {
            font-family: NES2;
            src: url(${NES2});
        }
    font-family: 'NES2';
    @media(max-width: 1200px){
        width: 100%;
        align-items: center;
        justify-content: center;
        margin: 405px 0 0 100px;
    }

`;

export const PainelRoxo = styled.div`
    position: relative;
    top: 1150px;
    background-color: ${(props) => props.theme.colors.blue};
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding: 240px;
    transform: skew(0deg, 5deg) translateY(-50px);
    margin:-8px;
    margin-top: -570px;
`;

export const Text1 = styled.h2`
    bottom: 5px;
    color: ${(props) => props.theme.colors.background};
`;
export const Text2 = styled.h2`
    margin: 5px;
    color: ${(props) => props.theme.colors.orange};
`;
export const Text3 = styled.h2`
    margin: 5px;
    color: ${(props) => props.theme.colors.background};
`;

export const Caixinha = styled.div`
    display: flex;
    transform: skew(0deg, -5deg);
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