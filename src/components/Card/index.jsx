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
// chnage language
import { useTranslation } from "react-i18next";

const Card = ({ src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataToTranslate = [
    {
      cardTitle: t("card.cardTitle"),
      clients: t("card.clients"),
      support: t("card.support"),
      price: t("card.price"),
      time: t("card.time"),
      assistance: t("card.assistance"),
      resevre: t("card.resevre"),
      fillForm: t("card.fillForm"),
      name: t("card.name"),
      submit: t("card.submit"),
      surname: t("card.surname"),
      phoneNumber: t("card.phoneNumber"),
      telegramUsName: t("card.telegramUsName"),
    },
  ];
  return (
    <Container>
      <CardImage>
        <img src={src} alt="China cities" />
      </CardImage>
      <Content>
        {dataToTranslate.map((value, index) => {
          return (
            <>
              <div key={index} className="card__title">
                {value?.cardTitle}
              </div>
              <div className="info">
                <FaUsers className="right users" />
                {value?.clients}
              </div>
              <div className="card__devider"></div>
              <div className="card__title benefits">{value?.support}</div>
              <div className="info">
                <IoIosPricetags className="right" />
                {value?.price}
              </div>
              <div className="info">
                <IoIosTime className="right" />
                {value?.time}
              </div>
              <div className="info">
                <FaCheck className="right" />
                {value?.assistance}
              </div>

              <Wrapper>
                <AntDButton onClick={showModal}>{value?.resevre}</AntDButton>
                <AntModal
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <UserBackground>
                    <UserIcon src={img} />
                  </UserBackground>
                  <h4>{value?.fillForm}</h4>
                  <Section>
                    <Input placeholder={value?.name} />
                    <Input placeholder={value?.phoneNumber} />
                  </Section>
                  <Section>
                    <Input placeholder={value?.surname} />
                    <Input placeholder={value?.telegramUsName} />
                  </Section>
                  <SubmitSection>
                    <SubmitBtn>{value?.submit}</SubmitBtn>
                  </SubmitSection>
                </AntModal>
              </Wrapper>
            </>
          );
        })}
      </Content>
    </Container>
  );
};
export default Card;
