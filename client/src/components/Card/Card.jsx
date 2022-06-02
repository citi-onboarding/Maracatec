import React from "react";
import './CardStyle.css';
import { image } from './assets';


const Card = (props) => {

     return ( 
         <div className="Container">
             <img src="./image.png" alt="" />
             <h3>Estimar ou não estimar? Eis a questão</h3>
             <p>15/05/2022</p>
         </div>
     )
}

export default Card; 