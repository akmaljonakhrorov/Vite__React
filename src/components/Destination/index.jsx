import { Container, Content, Card } from ".";
// react slick
import React, { Component } from "react";
import Slider from "react-slick";

export const Destination = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Content>
        <div className="subTitle">
          Top 10 Beautiful Destinations for Unforgettable Travels
        </div>
        <div className="title">
          Every week, new opportunities and unexpected adventures await you!
          Each city reveals its hidden beauty, offering you new adventures. Feel
          like you are part of these wonders!
        </div>
      </Content>
      <div className="slider-container">
        <Slider {...settings}>
          <Card>
            <img
              src="https://tourland.uz/assets/ftoq-67oyKgOd.jpeg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/panda-mRCbW3Hl.jpg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/zanjen-DQXYFLw8.jpg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/zanjen-DQXYFLw8.jpg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/xitoy2-CZ6SZdr1.jpg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/banbuk1-C0Lj44EW.jpeg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/togq-5qZptA62.jpeg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/koprik-b7PL2tNS.webp"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/togq-5qZptA62.jpeg"
              alt="china"
            />
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/koprik-b7PL2tNS.webp"
              alt="china"
            />
          </Card>
        </Slider>
      </div>
    </Container>
  );
};
export default Destination;
