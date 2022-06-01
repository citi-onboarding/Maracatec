import React from "react";
import {NavbarComponent} from './styles';
import { Button } from "../Button";
import { LogoMaracatec } from "../../assets";


export const Navbar = (NavbarProps) => {
    const { home, partner, editions, reference } = NavbarProps;
    
    return (
        <NavbarComponent>
            <div className="navbarContent">
                <img src={LogoMaracatec}/>
                <a href={ home }>Home</a>
                <a href={ partner }>Parceiros</a>
                <a href={ editions }>Edições</a>
            </div>
            <div className="button"><Button reference={ reference } text="Contato" width="113px"/></div>
        </NavbarComponent>
    );
}