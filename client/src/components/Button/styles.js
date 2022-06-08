import styled from 'styled-components';
import { NES2 } from '../../assets';

export const ButtonComponent = styled.div`
    button{
        background: rgba(0, 167, 162, 1);
        border: 2px solid rgba(0, 167, 162, 1);
        border-radius: 20px;
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        height: 44px;

        @font-face {
            font-family: NES2;
            src: url(${NES2});
        }

        font-family: 'NES2';font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #F5F5F5;
    }
    button:hover{
        filter: brightness(110%);  
    }
`;
