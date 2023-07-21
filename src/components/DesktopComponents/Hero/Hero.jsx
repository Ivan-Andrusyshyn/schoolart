import "../style/Hero.css";
import "../style/slider.css";
import React, { useEffect, useState } from "react";
import { slides } from "./slides";
import { useSwipeable } from "react-swipeable";

export const Hero = () => {
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

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length),
    onSwipedRight: () =>
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Add this to enable swiping with mouse (for testing in the browser)
  });

  return (
    <div className="hero-section">
      <div className="hero-slider" {...handlers}>
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
    </div>
  );
};