import React from "react";
import {ButtonComponent} from './styles';


export const Button = (ButtonProps) => {
    const { text, width, reference } = ButtonProps;
    return (
        <ButtonComponent>
            <button href={reference} style = {{width: ButtonProps.width}}> {text} </button>
        </ButtonComponent>
    );
}