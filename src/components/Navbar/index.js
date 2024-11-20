import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  background: #fff;
  padding: var(--padding);
  height: 150px;
  width: 100%;
  z-index: 1;
  margin: auto;
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
  width: 180px;
  height: 180px;
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export { Container, Section, Logo };
