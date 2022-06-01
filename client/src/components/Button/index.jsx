import React from "react";
import {ButtonComponent} from './styles';


export const Button = (ButtonProps) => {
    const { text, width } = ButtonProps;
    return (
        <ButtonComponent>
            <button style = {{width: ButtonProps.width}}> {text} </button>
        </ButtonComponent>
    );
}