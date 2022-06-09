import styled from "styled-components";
import { FontDescription } from "../../assets";
import { Instagram2 } from '../../assets';
import { Spotify2 } from '../../assets';
import { Youtube2 } from '../../assets';

export const Content = styled.div`
    margin-top: -30%;
`;

export const PainelVerde = styled.div`
    background-color: #00A7A2;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding: 116px;
    transform: skew(0deg, 2deg) translateY(50px);
    margin:-8px;
    margin-top: 287px;
`;

export const Texts = styled.div`
    display: flex;
    transform: skew(0deg, -2deg);
    color: #F1F1F1;

    @font-face {
            font-family: Blogger Sans;
            src: url(${FontDescription});
        }

    .Evento{
        display: flex;
        flex-direction: column;
        margin-left: 204px;
        margin-right: 56px;
        transform: translate( 60px, -40px );
    }

    .Contato{
        display: flex;
        flex-direction: column;
        margin-left: 56px;
        margin-right: 134px;
        width: 154px;
        transform: translate( 60px, -40px );
    }

    h4{
        font-family: 'NES2';
        font-style: normal;
        font-size: 24px;
    }

    .Logo{
        margin-left: 105px;
        margin-right: 154px;
    }

    .linksEvento{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    a{ 
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        margin: 8px;
        font-family: 'Blogger Sans';
        font-style: normal;
        font-size: 18px;
    }

    p{
        font-family: 'Blogger Sans';
        font-size: 18px;
    }
`;

export const ImagemCarangueijo = styled.div`
    position: relative;
    width: 68.521229868228%;
    height: 43.841059602649%;
    transform: translate(37%, 129%);
    z-index: 2;

    
`;

export const PainelPreto = styled.div`
    background-color: #3B3B3B;
    max-width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 110px 8px 110px;
    transform: skew(0deg, 0deg);
    margin:-8px;

    .SocialMidias{
        display: flex;
    }

    .Imagem1{
        width: 32px;
        height: 24px;
        margin: 12px;
    }

    .Imagem1 :hover{
        display: none;
    }

    #instagram :hover{
        background: url(${Instagram2}) no-repeat;
    }

    #spotify :hover{
        background: url(${Spotify2}) no-repeat;
    }

    #youtube :hover{
        background: url(${Youtube2}) no-repeat;
    }

`;