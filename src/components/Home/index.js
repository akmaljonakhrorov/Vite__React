import styled from "styled-components";

const Container = styled.div`
  padding-top: 135px;
  position: relative;
`;

const HomeImg = styled.img`
  width: 100%;
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
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
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
`;
export { Container, HomeImg, Content, Blur, Button };
