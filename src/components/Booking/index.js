import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  margin-top: 85px;
`;

const HomeImg = styled.img`
  width: 100%;
  max-height: 600px;
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
  background: white;
  color: rgb(117, 164, 193);
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background: rgb(117, 164, 193);
    color: white;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  gap: 45px;
  bottom: -35%;
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
`;
const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f0f0f0;
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
