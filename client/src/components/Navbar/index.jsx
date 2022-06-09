import React from "react";
import {NavbarComponent} from './styles';
import { Button } from "../Button";
import { LogoMaracatec } from "../../assets";
import { Banner1 } from "../Banner1";


export const Navbar = (NavbarProps) => {
    const { home, partner, editions, reference } = NavbarProps;
    
    function closeclickhome() { 
        var menu = document.querySelector('HomeCall')
        var closeIcon = document.querySelector('#nav-toggle1');
        menu.addEventListener('click', handleMenuClick);

        function handleMenuClick() {
            closeIcon.checked = false;
            window.scrollTo(0,5000)
        }

    }

    function closeclickpartner() { 
        var menu = document.querySelector('PartnerCall')
        var closeIcon = document.querySelector('#nav-toggle2');
        menu.addEventListener('click', handleMenuClick);

        function handleMenuClick() {
            closeIcon.checked = false;
            window.scrollTo(0,5000)
        }

    }


    function closeclickcarousel() { 
        var menu = document.querySelector('CarouselCall')
        var closeIcon = document.querySelector('#nav-toggle3');
        menu.addEventListener('click', handleMenuClick);

        function handleMenuClick() {
            closeIcon.checked = false;
            window.scrollTo(0,5000)
        }

    }

    function closeclickcontact() { 
        var menu = document.querySelector('ContactCall');
        var closeIcon = document.querySelector('#nav-toggle4');
        menu.addEventListener('click', handleMenuClick);

        function handleMenuClick() {
            closeIcon.checked = false;
            window.scrollTo(0,5000)
        }

    }

    return (
        <NavbarComponent>
            <div className="navbarContent">
                <img src={LogoMaracatec}/>
                <a htmlFor='nav-toggle1'href='#HomeLink' className="HomeCall" onClick={closeclickhome}>Home</a>
                <a htmlFor='nav-toggle2'href='#PartnerLink' className="PartnerCall" onClick={closeclickpartner}>Parceiros</a>
                <a htmlFor='nav-toggle3'href='#CarouselLink' className="CarouselCall" onClick={closeclickcarousel}>Edições</a>
            </div>
            <div className="button">
                <a htmlFor='nav-toggle4' href='#ContactLink' className="ContactCall" onClick={closeclickcontact}>
                    <Button reference={ reference } text="Contato" width="113px"/>
                </a>
            </div>
        </NavbarComponent>
    );
}