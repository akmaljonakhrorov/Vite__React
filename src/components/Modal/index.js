import styled from "styled-components";
import user from "../../assets/images/user.png";
import { Modal } from "antd";
const AntModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 460px;
  height: 265px;
  padding: 24px;
`;

const UserBackground = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgb(163, 230, 53);
`;
const UserIcon = styled(user)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
`;
const Input = styled.input`
  width: 190px;
  height: 25px;
  border: 0.8 solid rgb(172, 172, 172);
  padding: 8px 16px;
`;
const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background: rgb(163, 230, 53);
`;
export { AntModal, UserIcon, UserBackground, Input, SubmitBtn };
