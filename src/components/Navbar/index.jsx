import React from "react";
import { Container, Section, Logo } from "./index";
import logoImg from "../../assets/images/logoImg.png";
import Navlinks from "../Navlinks";
// icons
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
    <Container>
      <Section>
        <Logo src={logoImg} alt="logo__image" />
      </Section>
      <Section>
        <ul className="nav-center">
          <Navlinks />
        </ul>
      </Section>
      <Section>
        <FaTelegram className="nav-icon" />
        <FaInstagramSquare className="nav-icon" />
        <FaFacebook className="nav-icon" />
      </Section>
    </Container>
  );
};
export default Navbar;
