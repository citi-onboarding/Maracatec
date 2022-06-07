import React, { useState } from "react";
import { button } from "../../assets";
import './UStyles.css';

const UpperButton = ({onClick, toggle}) => {

    return (
            <button id= {toggle ? "selected" : "diselected"} onClick={onClick} className="ubutton">
                <img src= { button } alt="" />
                <p>Spotify</p>
            </button>
    )
}

export default UpperButton;