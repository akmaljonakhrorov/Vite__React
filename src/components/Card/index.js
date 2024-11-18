import { Button, Modal } from "antd";
import styled from "styled-components";
import userImg from "../../assets/images/userImg.png";
const Container = styled.div`
  position: relative;
  margin-bottom: 75px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 305px;
  height: 280px;
  background: #ffffff;
  border-radius: 25px;
  position: absolute;
  bottom: -5%;
  right: 5%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  padding: 20px;
  gap: 0.25rem;
`;

const CardImage = styled.div`
  max-width: 320px;
  img {
    width: 100%;
    height: 400px;
    border-radius: 18px;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  padding: 12px 0px;
  margin: 0px 15px;
`;
const AntDButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 30px;
  background: rgb(117, 164, 193);
  color: black;
  font-weight: 600;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background: white;
    color: rgb(117, 164, 193);
    transform: scale(1.1);
    border: 1px solid #75a4c1;
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
  CardImage,
  Content,
  AntDButton,
  Wrapper,
  AntModal,
  UserIcon,
  UserBackground,
  Input,
  SubmitBtn,
  Section,
  SubmitSection,
};
