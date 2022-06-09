import React, { useState } from "react";
import { button } from "../../assets";
import './UStyles.css';

const UpperButton = ({href, text, onClick, toggle}) => {

    return (
            <button id= {toggle ? "selected" : "diselected"} onClick={onClick} className="ubutton">
                <div className="circle">
                    <img src={href}/>
                </div>
                <p>{text}</p>
            </button>
    )
}

export default UpperButton;