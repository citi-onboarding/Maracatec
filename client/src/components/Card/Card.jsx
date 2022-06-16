import React from "react";
import { LowerButton } from '..';
import './CPStyle.css';
import { Image, Title } from "./style";



const Card = (item) => {
    return (
        <div className="Container">
            <div className="content">
                <a href={item.url}>
                    <Image src={item.image} />
                </a>
            </div>
            <Title>{item.title}</Title>
            <div className="info">
                <p>{item.date}</p>
                <LowerButton url={item.url} />
            </div>
        </div>
    )
}

export default Card; 