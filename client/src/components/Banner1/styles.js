import styled from 'styled-components';
import { NES2 } from '../../assets';
import { FontDescription } from '../../assets';

export const Banner1Component = styled.div`
    margin-top: 300px;
    margin-left: 3%;
    height: 200px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .content{
        width: 550px;
    }
    h1{
        @font-face {
            font-family: NES2;
            src: url(${NES2});
        }

        font-family: 'NES2';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 63px;

        color:  ${(props) => props.theme.colors.black};

        text-align: left;

        padding: 0px;
        margin: 0px;
    }

    .pink{
        color: ${(props) => props.theme.colors.pink};
    }

    .green{
        color: ${(props) => props.theme.colors.green};
    }

    .black{
        font-weight: bold;
    }

    p{
        @font-face {
            font-family: 'Blogger Sans';
            src: url('{FontDescription}') format('truetype');
        }

        font-family: 'Blogger Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;

        color:  ${(props) => props.theme.colors.black};

        text-align: left;

        
        padding: 0px;
        margin: 0px;
    }
    img{
        width: 670px;
        padding: 0px;
        margin: 0px;
    }
`;
