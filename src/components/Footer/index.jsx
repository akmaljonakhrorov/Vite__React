import React from "react";
import { Container, Content, Section, Devider } from ".";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
// i18n, change language
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      subtitle: t("footer.subtitle"),
      title: t("footer.title"),
      links: t("footer.links"),
      home: t("footer.home"),
      about: t("footer.about"),
      resources: t("footer.resources"),
      tours: t("footer.tours"),
      contact: t("footer.contact"),
    },
  ];
  return (
    <Container>
      <Section>
        {dataToTranslate.map((value, index) => {
          return (
            <>
              <Content>
                <div className="footer__subtitle">{value.subtitle}</div>
                <div className="title">{value.title}</div>
                <div className="content__items">
                  <span className="content__item">
                    <FaTelegram />
                  </span>
                  <span className="content__item">
                    <FaInstagramSquare />
                  </span>
                  <span className="content__item">
                    <FaFacebook />
                  </span>
                </div>
              </Content>
              <Content>
                <a href="/" className="footer__title">
                  {value.links}
                </a>
                <a href="/" className="footer__title">
                  {value.home}
                </a>
                <a href="/" className="footer__title">
                  {value.about}
                </a>
              </Content>
              <Content>
                <a href="/" className="footer__title">
                  {value.resources}
                </a>
                <a href="/" className="footer__title">
                  {value.tours}
                </a>
                <a href="/" className="footer__title">
                  {value.contact}
                </a>
              </Content>
            </>
          );
        })}
      </Section>
    </Container>
  );
};
export default Footer;
