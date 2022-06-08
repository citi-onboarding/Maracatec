import styled from 'styled-components';
import { NES2 } from '../../assets';

export const NavbarComponent = styled.div`
    background: ${(props) => props.theme.colors.background};
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.2);

    position: fixed;
    width: 100%;
    height: 120px;
    left: 0px;
    top: 0px;
    padding-left: 4%;
    z-index: 100;

    display: flex;
    justify-content: space-around;

    .navbarContent{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70%;
    }

    img{
        width: 171px;
        margin-right: 10%;
    }

    .button{
        display: flex;
        align-self: center;
    }

    a{
        text-decoration: none;
        @font-face {
            font-family: NES2;
            src: url(${NES2});
        }

        font-family: 'NES2';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 72px;

        text-align: center;

        color: ${(props) => props.theme.colors.black};

        padding: 0 4vw 0 4vw;
    }
    a:hover{
        text-decoration: none;
        padding:  0 4.2vw 0 3.8vw;
    }
    a:active{
        text-decoration: none;
        color: ${(props) => props.theme.colors.green};
    }
`;
