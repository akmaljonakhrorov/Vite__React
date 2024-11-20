import { Container, Content, Card, IconBackground, Details, Blur } from ".";
// react slick
import React from "react";
import Slider from "react-slick";
import { SlSizeFullscreen } from "react-icons/sl";
export const Location = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
        <div className="subTitle">Best Locations</div>
        <div className="title">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </div>
      </Content>
      <div className="slider-container">
        <Slider {...settings} className="slider-itmes">
          <Card>
            <img
              src="https://plus.unsplash.com/premium_photo-1661964121314-cb43af3580a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D"
              alt="china"
            />
            <Blur />
            <IconBackground>
              <SlSizeFullscreen className="resize" />
            </IconBackground>
            <Details>
              <span>Nanjing</span>
              <span>Population: 2M</span>
            </Details>
          </Card>
          <Card>
            <img
              src="https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D"
              alt="china"
            />
            <Blur />
            <IconBackground>
              <SlSizeFullscreen className="resize" />
            </IconBackground>
            <Details>
              <span>Nanjing</span>
              <span>Population: 2M</span>
            </Details>
          </Card>
          <Card>
            <img
              src="https://tourland.uz/assets/ftoq-67oyKgOd.jpeg"
              alt="china"
            />
            <Blur />
            <IconBackground>
              <SlSizeFullscreen className="resize" />
            </IconBackground>
            <Details>
              <span>Nanjing</span>
              <span>Population: 2M</span>
            </Details>
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaW5hfGVufDB8fDB8fHww"
              alt="china"
            />
            <Blur />
            <IconBackground>
              <SlSizeFullscreen className="resize" />
            </IconBackground>
            <Details>
              <span>Nanjing</span>
              <span>Population: 2M</span>
            </Details>
          </Card>
        </Slider>
      </div>
    </Container>
  );
};
export default Location;
