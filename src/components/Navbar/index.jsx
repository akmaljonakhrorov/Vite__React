import React from "react";
import { Container, Logo, Section } from "./index";
import logoImg from "../../assets/images/logoImg.png";
import Navlinks from "../Navlinks/index.jsx";
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
    </Container>
  );
};
export default Navbar;
