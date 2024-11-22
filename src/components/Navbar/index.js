import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  background: #fff;
  max-height: 150px;
  width: 100%;
  z-index: 1;
  margin: auto;
  .navbar {
    height: 150px;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 480px;
    height: 100px;
    padding: 0px;
    margin: auto;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  .contact {
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
`;

const Logo = styled.img`
  max-width: 180px;
  max-height: 180px;
  @media only screen and (max-width: 390px) {
    width: 100%;
    max-width: 100px;
    max-height: 100px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    width: 150px;
    height: 150px;
  }
`;

export { Container, Section, Logo };
