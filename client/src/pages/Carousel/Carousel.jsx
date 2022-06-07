import { Button } from '../../components';
import { Card, UpperButton } from '../../components';
import React, { Component, useState, useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import './CarouselStyle.css';
import { imgCard } from '../../assets';

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const allValues = [
  {
    date: "15/05/2022",
    title: "Estimar ou não estimar? Eis a questão 1",
    image: imgCard
  },
  {
    date: "15/05/2022",
    title: "Estimar ou não estimar? Eis a questão 2",
    image: imgCard
  },
  {
    date: "15/05/2022",
    title: "Estimar ou não estimar? Eis a questão 3",
    image: imgCard
  },
  {
    date: "15/05/2022",
    title: "Estimar ou não estimar? Eis a questão 4",
    image: imgCard
  },
  {
    date: "15/05/2022",
    title: "Estimar ou não estimar? Eis a questão 5",
    image: imgCard
  }
]

const spotifyValues = [
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (diferente)",
    image: imgCard
  },
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (diferente)",
    image: imgCard
  },
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (diferente)",
    image: imgCard
  },
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (diferente) 1",
    image: imgCard
  }
]

const youtubeValues = [
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (alternativo)",
    image: imgCard
  },
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (alternativo)",
    image: imgCard
  },
  {
    date: "03/11/2022",
    title: "Estimar ou não estimar? Eis a questão (alternativo)",
    image: imgCard
  }
]

export default function Carousel() {

  /* const [infos, setInfos] = useState() */
  const [cards, setCards] = useState(allValues)
  const [toggles, setToggles] = useState([true, false, false])

  function didTapAllValues(){
    setCards(allValues)
    setToggles([true, false, false])
  }

  function didTapSpotifyValues(){
    setCards(spotifyValues)
    setToggles([false, true, false])
  }

  function didTapYoutubeValues(){
    setCards(youtubeValues)
    setToggles([false, false, true])
  }

  return (
    <>
      <div  className='centerTitle'>
        <div className='title'>
          <p>Dá uma olhada no que rolou nas 
          <span className='pink'> edições passadas </span> do <span className='blue'>evento</span></p>
        </div>
      </div>
      <div className='upperButtonWrapper'>
        <UpperButton toggle={toggles[0]} onClick = {() => {
          didTapAllValues()
        }}/>
        <UpperButton toggle={toggles[1]} onClick = {() => {
          didTapSpotifyValues()
        }}/>
        <UpperButton toggle={toggles[2]} onClick = {() => {
          didTapYoutubeValues()
        }} />
      </div>
      <div className='center'>
        <div className='sliderContainer'>
          <Slider  {...settings}>
            {
              cards.map((card) => {
                return <Card item={card} key={card.date} />
              })
            }
          </Slider>
          <div className='centerButton'>
            <Button text="Ler Mais" />
          </div>
        </div>
      </div>    
    </>
  )
}
