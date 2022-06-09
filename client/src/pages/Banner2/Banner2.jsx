import React, { useEffect, useState }  from "react";
import { ImageBanner } from "../../components";
import { Container, Text1, Text2, Text3, Caixinha, Fundo, PainelRoxo, TextBox } from './styles';
import { FundoBanner } from "../../assets";
import axios from 'axios';

function Banner2() {
    const [Images, setImages] = useState([]);

    const getInfos = async() => {
        const response = await axios.get('http://localhost:3001/images');
        setImages(response.data);
    }

    useEffect(()=>{
        getInfos();
    }, []);

    return (
        <div>
            <PainelRoxo  id="PartnerLink">
                <TextBox>
                    <Text3> Nossos </Text3>
                    <Text2> parceiros </Text2>
                    <Text3> de movimento </Text3>
                </TextBox>
                <Caixinha>
                    { Images.slice(0,6).map((Image)=>{
                        const { images } = Image;
                        return <ImageBanner image={images} text="Test"/>
                    })}
                </Caixinha>
            </PainelRoxo>
        </div>
    );
}

export default Banner2;