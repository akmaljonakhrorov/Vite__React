import styled from "styled-components";
const Container = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0px 0px;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    max-height: 700px;
    .subTitle {
      width: 100%;
      width: 728px;
      margin: 0 auto;
    }
    .title {
      width: 100%;
      width: 728px;
      margin: 0 auto;
      padding-bottom: 0px;
    }
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
  @media only screen and (max-width: 768px) {
    max-width: 420px;
    max-height: 400px;
    padding: 20px;
  }
`;

export { Container, Content };
