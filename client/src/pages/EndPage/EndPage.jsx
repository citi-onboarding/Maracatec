import React from "react";
import { StarSymbol } from "../../assets";
import { ChatBox } from "../../components/ChatBox";
import { Carousel } from "../Carousel";
import { Footer } from "../../pages";

const EndPage = () => {
    return (
        <div>
            <Carousel/>
            <ChatBox/>
            <Footer/>
        </div>
    );
}

export default EndPage;