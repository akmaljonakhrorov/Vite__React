import React from "react";
import imgMetro from "../../assets/images/metro.jpg";
import imgPlnae from "../../assets/images/plane.jpg";
import {
  Container,
  TicketWrapper,
  SectionLeft,
  SectionRight,
  Content,
  AntDButton,
  Image,
  Devider,
} from ".";
import { useTranslation } from "react-i18next";
export const Ticket = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      subtitle: t("ticket.subtitle"),
      title: t("ticket.title"),
      firstCardTitle: t("ticket.firstCardTitle"),
      secondCardTitle: t("ticket.secondCardTitle"),
      button: t("ticket.button"),
      world: t("ticket.world"),
      firstCardInfo: t("ticket.firstCardInfo"),
      secondCardInfo: t("ticket.secondCardInfo"),
      global: t("ticket.global"),
    },
  ];
  return (
    <Container>
      {dataToTranslate.map((value, index) => {
        return (
          <div key={index}>
            <div className="subTitle">{value.subtitle}</div>
            <div className="title">{value.title}</div>
            <TicketWrapper>
              <SectionLeft>
                <Image src={imgMetro} />
              </SectionLeft>
              <SectionRight>
                <Content>
                  <div className="card__title left">{value.firstCardTitle}</div>
                  <AntDButton>{value.button}</AntDButton>
                </Content>
                <p className="info">{value.world}</p>
                <div className="info">{value.firstCardInfo}</div>
              </SectionRight>
            </TicketWrapper>
            <Devider></Devider>
            <TicketWrapper $top={true}>
              <SectionLeft>
                <Image src={imgPlnae} />
              </SectionLeft>
              <SectionRight>
                <Content>
                  <div className="card__title left">
                    {value.secondCardTitle}
                  </div>
                  <AntDButton>{value.button}</AntDButton>
                </Content>
                <p className="info">{value.global}</p>
                <div className="info">{value.secondCardInfo}</div>
              </SectionRight>
            </TicketWrapper>
          </div>
        );
      })}
    </Container>
  );
};
export default Ticket;
