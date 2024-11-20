import styled from "styled-components";
const Container = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 75px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0px 0px;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  @media only screen and (max-width: 480px) {
    width: 480px;
    padding: 0px 15px;
  }
`;

export { Container, Content };
