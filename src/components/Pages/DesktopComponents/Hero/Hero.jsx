import "../style/Hero.css";
import "../style/slider.css";
import React, { useEffect, useState } from "react";
import { slides } from "./slides";
import { useSwipeable } from "react-swipeable";
import { nanoid } from "nanoid";
export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }
    },
    onSwipedRight: () => {
      if (currentSlide === 0) {
        setCurrentSlide(slides.length - 1);
      } else {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    swipeDuration: 300,
    trackTouch: true,
    trackMouse: false,
    delta: 10,
    preventScrollOnSwipe: true,
    rotationAngle: 0,
    touchEventOptions: { passive: true },
  });

  return (
    <div className="hero-section">
      <div className="hero-slider" {...handlers}>
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={nanoid()}
              className={`slide ${
                index === currentSlide ? "active-slide" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>
              <div className="slide-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-buttons">
          {slides.map((slide, index) => (
            <div
              key={nanoid()}
              className={`slider-button ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
