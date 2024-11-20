import styled from "styled-components";

const Container = styled.div`
  padding-top: 135px;
  position: relative;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const HomeImg = styled.img`
  width: 100%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    max-width: 480px;
    height: 50vh;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  color: #cfcfcf;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 12px 0px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    position: absolute;
    color: #cfcfcf;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 32px;
      font-weight: 700;
      margin: 10px 0px;
      color: white;
    }
    h2 {
      padding-top: 20px;
      width: 300px;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
  }
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background: rgb(117, 164, 193);
  color: white;
  font-weight: 600;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background: white;
    color: rgb(117, 164, 193);
    font-size: 18px;
    transform: scale(1.1);
    border: 2px solid #75a4c1;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6),
      0 0 30px rgba(0, 255, 255, 0.4);
  }
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      background: white;
      color: rgb(117, 164, 193);
      border: 2px solid #75a4c1;
      transform: none;
    }
  }
`;

export { Container, HomeImg, Content, Blur, Button };
