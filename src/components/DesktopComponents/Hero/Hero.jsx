import "../style/Hero.css";
import "../style/slider.css";
import React, { useEffect, useState } from "react";
import image1 from "../../../image/gonchar1.jpg";
import image2 from "../../../image/majster-klas-goncharnogo-mystecztva-dlya-dvoh-01.jpg";
import image3 from "../../../image/image.webp";

export const Hero = () => {
  const slides = [
    {
      image: image1,
      title: "Верес навКОЛО",
      subtitle: "Студія творчості",
    },
    {
      image: image3,
      title: "Верес навКОЛО",
      subtitle: "Студія малюнку та живопису (онлайн)",
    },
    {
      image: image2,
      title: "Студія ліплення та гончарства",
      subtitle: "(для дітей та дорослих)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active-slide" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="slide-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="slider-buttons">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-button ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
