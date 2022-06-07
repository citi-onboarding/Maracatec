import styled from 'styled-components';
import { MainFont } from '../../assets';
import { FontDescription } from '../../assets';
import { ChatBoxScreen } from '../../assets';

export const ChatBoxComponent = styled.div`
    background-image: url(${ChatBoxScreen});
    background-repeat: no-repeat;
    background-size: 55vw;
    width: 55vw;
    height: 44vw;

    margin-top: 120px;
    margin-left: 22.5%;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    .content{
        width: 73.2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        width: 19.5vw;

        @font-face {
            font-family: 'NES2';
            src: url('{MainFont}') format('truetype');
        }

        font-family: 'NES2';
        font-style: normal;
        font-weight: 400;
        font-size: 2.9vw;
        line-height: 3vw;

        color: ${(props) => props.theme.colors.black};

    }

    .pink{
        color:  ${(props) => props.theme.colors.pink};
    }


    form{
        width: 100%;
        gap: 2.5vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    input{
        width: 100%;
        height: 3vw;

        padding: 7px 24px;
        border: 1.5px solid #3B3B3B;
        border-radius: 16px;
        background-color: rgba(1,1,1,0);
    }

    input:focus{
        outline: 0;
    }

    .message{
        height: 7vw;
        padding-top: 0px;
    }

    input::placeholder{
       
        @font-face {
            font-family: 'Blogger Sans';
            src: url('{FontDescription}') format('truetype');
        }

        font-family: 'Blogger Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;

        color: ${(props) => props.theme.colors.gray};

        text-align: left;
    }

    img{
        width: 12.6vw;
        position: absolute;
        left: 17vw;
        margin-top: 20%;
    }
`;
