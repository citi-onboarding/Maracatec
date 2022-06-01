import React from "react";
import { HomeContainer } from './styles';
import { LogoMaracatec } from '../../assets';
import { Banner1 } from "../../components/Banner1";
import { Navbar } from "../../components/Navbar";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar home='#Banner1' partner='' editions='' reference=''/>
            <Banner1/>
        </HomeContainer>
    );
}