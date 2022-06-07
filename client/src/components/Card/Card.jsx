import React from "react";
import { imgCard } from "../../assets";
import { LowerButton }  from '..';
import './CPStyle.css';


const Card = ({item}) => {

    return ( 
        <div className="Container">
            <div className="image">
                <a href= "" ><img src= { item.image } alt="" /></a>
                <h3>{item.title}</h3>
            </div>
            <div className="info">
                <p>{item.date}</p>
                <LowerButton/>
            </div>
        </div>
     )
}

export default Card; 