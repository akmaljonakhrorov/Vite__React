import React from "react";
import { Container, Content, Section, Devider } from ".";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <Section>
        <Content>
          <div className="footer__subtitle">
            Tourland guarantees quality and reliable service.
          </div>
          <div className="footer__title">
            You deserve the best, Tourland is the best choice!
          </div>
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
          <div className="footer__title">Useful Links </div>
          <div className="footer__title">Home </div>
          <div className="footer__title">About </div>
        </Content>
        <Content>
          <div className="footer__title">Other Resources</div>
          <div className="footer__title">Toures</div>
          <div className="footer__title">Contact </div>
        </Content>
      </Section>
    </Container>
  );
};
export default Footer;
