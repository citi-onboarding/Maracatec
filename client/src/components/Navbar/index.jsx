import React from "react";
import {NavbarComponent} from './styles';
import { Button } from "../Button";
import { LogoMaracatec } from "../../assets";
import { Banner1 } from "../Banner1";


export const Navbar = (NavbarProps) => {
    const { home, partner, editions, reference } = NavbarProps;
    
    return (
        <NavbarComponent>
            <div className="navbarContent">
                <img src={LogoMaracatec}/>
                <a href='{Banner1}'>Home</a>
                <a href=''>Parceiros</a>
                <a href={ editions }>Edições</a>
            </div>
            <div className="button"><Button reference={ reference } text="Contato" width="113px"/></div>
        </NavbarComponent>
    );
}