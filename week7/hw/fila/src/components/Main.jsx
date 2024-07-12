import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/scss/Main.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Main1 from "../assets/img/main1.svg"
import Main2 from "../assets/img/main2.svg"
import Main3 from "../assets/img/main3.svg"
import Main4 from "../assets/img/main4.svg"
import Main5 from "../assets/img/main5.svg"
import line from "../assets/img/underbar.svg"

const Main = () => {
  const slides = [
    { id: 1, image: Main1, alt: 'Slide 1', title: '24 NEW 인터런' },
    { id: 2, image: Main2, alt: 'Slide 2', title: 'FILA ECHAPPE' },
    { id: 3, image: Main3, alt: 'Slide 3', title: 'COLD WAVE \n T_SHIRTS' },
    { id: 4, image: Main4, alt: 'Slide 4', title: 'FILA \n WHITE LINE' },
    { id: 5, image: Main5, alt: 'Slide 5', title: 'PEITO' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); 

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex); 
  };

  return (
    <div className="main">
      <Swiper 
      className='swiper'
        spaceBetween={0} 
        slidesPerView={1} 
        loop={true} 
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="title">
        <h1>{slides[currentSlide].title}</h1>
        <button className='btn'>자세히보기</button>
      </div>
      <div className="line">
        <img src={line} alt="d"  />
      </div>
    </div>
  );
};

export default Main;