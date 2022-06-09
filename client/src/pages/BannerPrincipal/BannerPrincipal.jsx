import React from "react";
import { LogoMaracatec } from '../../assets';
import { Banner1 } from "../../components/Banner1";
import { Navbar } from "../../components/Navbar";

const BannerPrincipal = () => {
    return (
        <div>
            <div id="HomeLink"><p>.</p></div>
            <Navbar home='{Banner1}' partner='' editions='' reference='' />
            <Banner1 />
        </div>
    );
}

export default BannerPrincipal;