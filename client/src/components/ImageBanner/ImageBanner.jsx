import React from "react";
import { Image } from './styles';

function ImageBanner (ImageProps) {
    const { image , text } = ImageProps;
    return (
        <Image src={image} alt={text}/>
    );
} 

export default ImageBanner;