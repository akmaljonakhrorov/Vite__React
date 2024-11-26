import styled from "styled-components";
import { Modal } from "antd";
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
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 510px;
    h1 {
      font-size: 56px;
      font-weight: 700;
      margin: 10px 0px;
      color: white;
      margin: 12px 0px;
    }
    h2 {
      padding-top: 24px;
      width: 300px;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    transition: transform 0.5s ease-in-out;
    &:hover {
      width: 125px;
      background: white;
      color: rgb(117, 164, 193);
      border: 2px solid #75a4c1;
      transform: none;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 130px;
    height: 48px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      width: 120px;
      background: white;
      color: rgb(117, 164, 193);
      border: 2px solid #75a4c1;
    }
  }
`;
const Wrapper = styled.div`
  padding: 12px 0px;
  margin: 0px 15px;
  form {
    display: flex;
    justify-content: center;
  }
`;

const AntModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 480px;
  height: 285px;
  padding: 24px;
`;
const UserBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 15px;
  background: rgb(163, 230, 53);
`;
const UserIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const Input = styled.input`
  display: flex;
  width: 230px;
  height: 45px;
  border: 0.8px solid #d1d5db;
  padding: 8px 16px;
  border-radius: 8px;
  &:focus {
    border: 2px solid #a3e635;
    outline: none;
  }
  font-size: 16px;
  font-weight: 450;
  text-transform: capitalize;
`;
const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background: rgb(163, 230, 53);
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
`;
const SubmitSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export {
  Container,
  HomeImg,
  Content,
  Blur,
  Button,
  AntModal,
  Wrapper,
  UserBackground,
  SubmitSection,
  Section,
  SubmitBtn,
  Input,
  UserIcon,
};
