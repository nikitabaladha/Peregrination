import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import franceFestival1 from "../images/franceFestival_1.png";
import franceFestival2 from "../images/franceFestival_2.png";
import francePlace1 from "../images/francePlace_1.png";
import francePlace2 from "../images/francePlace_2.png";

import germanyFestival1 from "../images/germanyFestival_1.png";
import germanyFestival2 from "../images/germanyFestival_2.png";
import germanyPlace1 from "../images/germanyPlace_1.png";
import germanyPlace2 from "../images/germanyPlace_2.png";

import indiaFestival1 from "../images/indiaFestival_1.png";
import indiaFestival2 from "../images/indiaFestival_2.png";
import indiaPlace1 from "../images/indiaPlace_1.png";
import indiaPlace2 from "../images/indiaPlace_2.png";

import turkeyFestival1 from "../images/turkeyFestival_1.png";
import turkeyFestival2 from "../images/turkeyFestival_2.png";
import turkeyPlace1 from "../images/turkeyPlace_1.png";
import turkeyPlace2 from "../images/turkeyPlace_2.png";

import usaFestival1 from "../images/usaFestival_1.png";
import usaFestival2 from "../images/usaFestival_2.png";
import usaPlace1 from "../images/usaPlace_1.png";
import usaPlace2 from "../images/usaPlace_2.png";

const PhotoGallery = () => {
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    sliderRef.current.slickPause();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    sliderRef.current.slickPlay();
  };

  const images = [
    {
      src: franceFestival1,
      alt: "France festival",
      text: "Celebrate the essence of France in a visual symphony of culture and tradition.",
    },
    {
      src: franceFestival2,
      alt: "France festival",
      text: "France's festive flair in a snapshot: tradition meets celebration.",
    },
    {
      src: francePlace1,
      alt: "France Place",
      text: "Discover France's enchanting allure in every picturesque corner.",
    },
    {
      src: francePlace2,
      alt: "France festival",
      text: "France's charm captured in scenic splendor: where every place tells a story.",
    },
    {
      src: germanyFestival1,
      alt: "Germany festival",
      text: "Germany's festive spirit: where joy and tradition intertwine.",
    },
    {
      src: germanyFestival2,
      alt: "Germany festival",
      text: "Celebrate Germany in full color where festivals bring traditions to life.",
    },
    {
      src: germanyPlace1,
      alt: "Germany place",
      text: "Discover Germany's essence in every scenic nook and cranny.",
    },
    {
      src: germanyPlace2,
      alt: "Germany place",
      text: "Journey through Germany's charm in every picturesque spot.",
    },

    {
      src: indiaFestival1,
      alt: "India festival",
      text: "India's festivals: a vibrant tapestry of traditions, colors, and celebration.",
    },
    {
      src: indiaFestival2,
      alt: "India festival",
      text: "Immerse yourself in the festive kaleidoscope of India's vibrant traditions.",
    },
    {
      src: indiaPlace1,
      alt: "India place",
      text: "Embark a journey through India's places, where history whispers and nature sings.",
    },
    {
      src: indiaPlace2,
      alt: "India place",
      text: "Explore the enchanting landscapes of India's hidden gems.",
    },
    {
      src: turkeyFestival1,
      alt: "Turkey festival",
      text: "Turkey's festivals: where culture dances and traditions unfold in vibrant hues.",
    },
    {
      src: turkeyFestival2,
      alt: "Turkey festival",
      text: "Turkey's festivals: a cultural spectacle weaving tales of tradition, joy, and diversity.",
    },
    {
      src: turkeyPlace1,
      alt: "Turkey place",
      text: "Explore Turkey, where history and nature coexist in harmony.",
    },
    {
      src: turkeyPlace2,
      alt: "Turkey place",
      text: "Turkey's charm captured in every corner, where history whispers, nature beckons.",
    },
    {
      src: usaFestival1,
      alt: "USA festival",
      text: "USA's festivals: a vibrant celebration of diversity, culture, and joy.",
    },
    {
      src: usaFestival2,
      alt: "USA festival",
      text: "Celebrate the USA's cultural mosaic through its vibrant and diverse festivals.",
    },
    {
      src: usaPlace1,
      alt: "USA place",
      text: "Discover the allure of USA's landscapes, where diversity unfolds in every corner.",
    },
    {
      src: usaPlace2,
      alt: "USA place",
      text: "Explore the scenic wonders of USA's landscapes, where beauty meets diversity.",
    },
  ];

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          dots: false,
        },
      },
    ],
  };

  return (
    <div id="gallery" className="container-fluid">
      <div id="gallery-heading">
        <h4> Gallery glimpse !</h4>
      </div>
      <div className="container d-flex overflow-x: hidden; justify-content-center">
        <div className="container-fluid row slick-slider">
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className="card my-hover-effect"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? "0 8px 16px rgba(0, 0, 0, 0.5)"
                      : "",
                }}
              >
                <img src={image.src} className="card-img-top" alt={image.alt} />
                <div className="card-body">
                  <p className="card-text">{image.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
