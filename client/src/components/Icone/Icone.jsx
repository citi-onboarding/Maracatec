import React from "react";
import { Box } from './styles';

function Icone (IconeProps) {
    const { image, link } = IconeProps;
    return(
        <Box>
            <a href={link}>
                <img src={image} alt="" />
            </a>
        </Box>
    );
}

export default Icone;