import React, { Component, useState, useEffect } from "react";
import { Button, Card, UpperButton } from '../../components';
import { todos, spotify, youtube } from '../../assets';
import axios from "axios";
import Slider from "react-slick";
import './CarouselStyle.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
};

export default function Carousel() {

  const [infos, setInfos] = useState([])

  const getInfos = async () => {
    const response = await axios.get('https://maracatec.herokuapp.com/Carousel/')
    setInfos(response.data)
  }

  useEffect(() => {
    getInfos();
  }, [infos]);

  const [cards, setCards] = useState()
  const [toggles, setToggles] = useState([true, false, false])

  function didTapAllValues() {
    setCards(infos.slice(0, 9))
    setToggles([true, false, false])
  }

  function didTapSpotifyValues() {
    setCards(infos.slice(3, 6))
    setToggles([false, true, false])
  }

  function didTapYoutubeValues() {
    setCards(infos.slice(0, 3))
    setToggles([false, false, true])
  }

  return (
    <div className="ContainerGeral">
      <div className='centerTitle' id='CarouselLink'>
        <div className='title'>
          <p>Dá uma olhada no que rolou nas
            <span className='pink'> edições passadas </span> do <span className='blue'>evento</span></p>
        </div>
      </div>
      <div className='upperButtonWrapper'>
        <UpperButton href={todos}
          text="Todos" toggle={toggles[0]} onClick={() => {
            didTapAllValues()
          }} />
        <UpperButton href={spotify}
          text="Spotify" toggle={toggles[1]} onClick={() => {
            didTapSpotifyValues()
          }} />
        <UpperButton href={youtube}
          text="Youtube" toggle={toggles[2]} onClick={() => {
            didTapYoutubeValues()
          }} />
      </div>
      <div className='center'>
        <div className='sliderContainer'>
          <Slider  {...settings}>
            {
              cards?.map((card) => {
                const { image, description, date, url } = card;
                return <Card image={image} title={description} date={date} url={url} />
              })
            }
          </Slider>
          <div className='centerButton'>
            <a href='https://www.youtube.com/channel/UCRImnylwPm4EbVs38XjHPGQ' target='_blank' rel="noreferrer">
              <Button text="Ver Mais" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}