import styled from 'styled-components';
import { MainFont, SecondaryFont } from '../../assets';

export const TimerComponent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    h1{
        width: 35vw;   
    
        @font-face {
            font-family: 'NES2';
            src: url('{MainFont}') format('truetype');
        }

        font-family: 'NES2';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 36px;
        color: ${(props) => props.theme.colors.black};

        text-align: center;
    }

    .green{
        color:  ${(props) => props.theme.colors.green};
    }

    .content{
        width: 54.5vw;
        height: 16vw;
        
        background: #F1F1F1;
        box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        display: grid;
        justify-content: center;
        gap-row: 0;
    }

    p{
        @font-face {
            font-family: 'Inter';
            src: url('{SecondaryFont}') format('truetype');
        }

        font-family: 'Inter';
        font-style: normal;

        text-align: center;
    }

    .days, .hours, .minutes, .dots{
        width: 8vw;
        height: 7vw;
        font-size: 6vw;
        line-height: 7vw;
        margin-top: 32px;
        margin-bottom: 0;
    }

    .time{
        font-size: 4vw;
        line-height: 7vw;
        align-items: center;
        margin-top:4vw;
        color: ${(props) => props.theme.colors.black};
    }

    .pink{
        color: ${(props) => props.theme.colors.pink};
    }

    .days{
        color:  ${(props) => props.theme.colors.green};
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
    } 
    .hours{
        color:  ${(props) => props.theme.colors.pink};
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 4;
        grid-column-end: 6;
    } 
    .minutes{
        color:  ${(props) => props.theme.colors.orange};
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 7;
        grid-column-end: 9;
    }

    .dots{color: ${(props) => props.theme.colors.gray};}

    .daysName, .hoursName, .minutesName{
        width: 8vw;
        height: 8vw;
        font-size: 1.3vw;
        color: ${(props) => props.theme.colors.black};
    }

    .daysName{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 3;
    } 
    .hoursName{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 4;
        grid-column-end: 6;
    } 
    .minutesName{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 7;
        grid-column-end: 9;
    }
`;
