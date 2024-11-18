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
  /* max-width: 1440px; */

  z-index: 1;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
`;
export { Container, Section, Logo };
