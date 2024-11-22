import { Container, Content } from ".";
import Card from "../Card/index.jsx";
// react slick
import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

export const Cities = () => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  const dataToTranslate = [
    {
      pageSubtitle: t("city.pageSubtitle"),
      pageTitle: t("city.pageTitle"),
    },
  ];
  return (
    <Container>
      <Content>
        {dataToTranslate.map((value, index) => {
          return (
            <>
              <div key={index} className="subTitle">
                {value?.pageSubtitle}
              </div>
              <div className="title">{value?.pageTitle}</div>
            </>
          );
        })}
      </Content>
      <div className="slider-container">
        <Slider {...settings} className="slider-items">
          <Card src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbmF8ZW58MHx8MHx8fDA%3D" />
          <Card src="https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D" />
          <Card src="https://images.unsplash.com/photo-1508991399032-9cf2f7f791e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaW5hfGVufDB8fDB8fHww" />
          <Card src="https://media.istockphoto.com/id/1711079143/photo/jinshanling-great-wall-of-china.webp?a=1&b=1&s=612x612&w=0&k=20&c=R0_AHMwPX1uZnVpw9qC9_FtwaTaHOtrYCFXgO4unKEY=" />
          <Card src="https://media.istockphoto.com/id/1395871608/photo/chinese-temple-foo-dog-lion-guard-statue-with-shanghais-pudong-districts-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=bl3bMwUTmvugS2KPPCed-EgmSF61tQAm0raVVW7i718=" />
        </Slider>
      </div>
    </Container>
  );
};
export default Cities;
