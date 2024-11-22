import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  margin-top: 85px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    max-width: 480px;
    padding: 0px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    min-width: 728px;
    padding: 0px;
  }
`;

const HomeImg = styled.img`
  width: 100%;
  max-height: 600px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    max-width: 480px;
    padding: 0px;
    height: 432px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    height: 600px;
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
    @media only screen and (max-width: 480px) {
      font-size: 24px;
      font-weight: 700;
      min-width: 310px;
      height: 32px;
      margin-bottom: 64px !important;
    }
    @media only screen and (max-width: 768px) {
      font-size: 44px;
      min-width: 600px;
      height: 32px;
      margin-bottom: 64px !important;
    }
  }
  h2 {
    @media only screen and (max-width: 480px) {
      font-size: 16px;
      font-weight: 600;
      min-width: 310px;
      margin-bottom: 0px !important;
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
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background: white;
  color: rgb(117, 164, 193);
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background: rgb(117, 164, 193);
    color: white;
  }
  @media only screen and (max-width: 480px) {
    max-width: 165px;
    max-height: 45px;
    padding: 12px 24px;
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 160px;
    max-height: 45px;
    padding: 12px 20px;
    font-size: 16px;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  gap: 45px;
  bottom: -35%;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 75%;
    left: 15%;
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 80%;
    left: 0%;
    margin-top: 30px;
    padding: 0px 20px;
  }
`;
const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 375px;
  height: 280px;
  border-radius: 25px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 16px 16px;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 332px;
    min-height: 290px;
    gap: 25px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 200px;
    max-height: 240px;
    gap: 20px;
    text-align: center;
  }
`;
const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f0f0f0;
  @media only screen and (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;
export {
  Container,
  HomeImg,
  Content,
  Blur,
  Button,
  Section,
  SectionItem,
  ContactIcon,
};
