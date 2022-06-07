import React from "react";
import { arrow } from "../../assets";
import './LStyles.css';

const Lowerbutton = (props) => { 
    return (
        <div className="container">
            <div className="lbutton">
                <a href=""><img src= { arrow } alt="" /></a>
            </div>
        </div>
    )
}

export default Lowerbutton; 