// react
import React, { useState } from "react";
import img from "../../assets/images/userImg.png";
import {
  Container,
  CardImage,
  Content,
  Wrapper,
  AntDButton,
  AntModal,
  UserIcon,
  UserBackground,
  Input,
  SubmitBtn,
  Section,
  SubmitSection,
} from ".";
// react icons
import { FaUsers, FaCheck } from "react-icons/fa";
import { IoIosPricetags, IoIosTime } from "react-icons/io";
// antd modal
import { Modal } from "antd";
const Card = ({ src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <CardImage>
        <img src={src} alt="China cities" />
      </CardImage>
      <Content>
        <div className="card__title">Chendu</div>
        <div className="info">
          <FaUsers className="right users" />
          20 Check Ins
        </div>
        <div className="card__devider"></div>
        <div className="card__title benefits">
          Benefits of our Visa Support service:
        </div>
        <div className="info">
          <IoIosPricetags className="right" />
          Best Price
        </div>
        <div className="info">
          <IoIosTime className="right" />
          Short Processing Time
        </div>
        <div className="info">
          <FaCheck className="right" />
          Trustworthy Assistance
        </div>
        <Wrapper>
          <AntDButton onClick={showModal}>Make a reservation</AntDButton>

          <AntModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <UserBackground>
              <UserIcon src={img} />
            </UserBackground>
            <h4>Please fill out this form.</h4>
            <Section>
              <Input placeholder="your name " />
              <Input placeholder="your phone number " />
            </Section>
            <Section>
              <Input placeholder="your surname " />
              <Input placeholder="your telegram username " />
            </Section>
            <SubmitSection>
              <SubmitBtn>Submit</SubmitBtn>
            </SubmitSection>
          </AntModal>
        </Wrapper>
      </Content>
    </Container>
  );
};
export default Card;
