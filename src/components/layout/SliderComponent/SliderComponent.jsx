import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SliderComponent.css";



const SliderComponent = ({ slides }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px'
  };

  const Slide = ({ image, title, subtitle, button }) => {
    return (
      <div className="slide">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{button}</button>
      </div>
    );
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <Slide
          key={slide.image}
          image={slide.image}
          title={slide.title}
          subtitle={slide.subtitle}
          button={slide.button}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;

  