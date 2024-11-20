import styled from "styled-components";
const Container = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding: 0px 25px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  width: 100%;
  .subTitle {
    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
  .title {
    @media only screen and (max-width: 480px) {
      width: 100%;
      min-width: 430px;
      height: 70px;
      color: rgb(175, 175, 185);
    }
  }
`;

const Card = styled.div`
  position: relative;
  max-width: 400px;
  img {
    width: 100%;
    height: 450px;
    border-radius: 25px;
    object-fit: cover;
    @media only screen and (max-width: 480px) {
      width: 100%;
      /* border-radius: 35px; */
    }
  }
`;
const IconBackground = styled.div`
  position: absolute;
  text-align: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  bottom: 10%;
  left: 10%;
`;

const Details = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  color: white;
  bottom: 10%;
  left: 10%;
  margin-left: 60px;
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: rgb(255, 255, 255);
  }
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    display: none;
    /* border-radius: 35px; */
  }
`;
export { Container, Content, Card, IconBackground, Details, Blur };
