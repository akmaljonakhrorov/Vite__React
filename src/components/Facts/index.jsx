import React from "react";
import imgTea from "../../assets/images/tea.jpg";
import imgKingdom from "../../assets/images/kingdom.jpg";
import imgCuisine from "../../assets/images/cuisine.jpeg";
import { FaUser, FaGlobe, FaHome, FaLongArrowAltRight } from "react-icons/fa";
import {
  Container,
  TicketWrapper,
  SectionLeft,
  SectionRight,
  Content,
  AntDButton,
  Image,
  Devider,
  Detailts,
  DetailsItem,
} from ".";
import { useTranslation } from "react-i18next";

export const Facts = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      firstCardSubtitle: t("facts.firstCardSubtitle"),
      firstCardTitle: t("facts.firstCardTitle"),
      firstCard: t("facts.firstCard"),
      button: t("facts.button"),
      world: t("facts.world"),
      firstCardInfo: t("facts.firstCardInfo"),
      direction: t("facts.direction"),
      secondCard: t("facts.secondCard"),
      kingdom: t("facts.kingdom"),
      secondCardInfo: t("facts.secondCardInfo"),
      thirdCard: t("facts.thirdCard"),
      diversity: t("facts.diversity"),
      thirdCardInfo: t("facts.thirdCardInfo"),
    },
  ];
  return (
    <Container>
      {dataToTranslate.map((value, index) => {
        return (
          <div key={index}>
            <div className="subTitle">{value.firstCardSubtitle}</div>
            <div className="title">{value.firstCardTitle}</div>
            <TicketWrapper>
              <SectionLeft>
                <Image src={imgTea} />
              </SectionLeft>
              <SectionRight>
                <Content>
                  <div className="card__title left">{value.firstCard}</div>
                  <AntDButton>
                    <a href="#location">{value.button}</a>
                  </AntDButton>
                </Content>
                <p className="info">{value.world}</p>
                <div className="info">{value.firstCardInfo}</div>
                <Devider></Devider>
                <Detailts>
                  <DetailsItem>
                    <FaUser className="react__FaIcon" />{" "}
                    <div className="info">8.66 M</div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaGlobe className="react__FaIcon" />
                    <div className="info">
                      41.290 km<sup>2</sup>
                    </div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaHome className="react__FaIcon" />{" "}
                    <div className="info">$400</div>
                  </DetailsItem>
                </Detailts>
                <Devider></Devider>
                <span className="direction">
                  <a href="#move-to-map">{value.direction}</a>
                  <FaLongArrowAltRight className="arrow" />
                </span>
              </SectionRight>
            </TicketWrapper>
            <TicketWrapper $top={true}>
              <SectionLeft>
                <Image src={imgKingdom} />
              </SectionLeft>
              <SectionRight>
                <Content>
                  <div className="card__title left">{value.secondCard}</div>
                  <AntDButton>
                    <a href="#location">{value.button}</a>
                  </AntDButton>
                </Content>
                <p className="info">{value.kingdom}</p>
                <div className="info">{value.secondCardInfo}</div>
                <Devider></Devider>
                <Detailts>
                  <DetailsItem>
                    <FaUser className="react__FaIcon" />
                    <div className="info">44.48 M</div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaGlobe className="react__FaIcon" />
                    <div className="info">
                      274.290 km<sup>2</sup>
                    </div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaHome className="react__FaIcon" />
                    <div className="info">$496</div>
                  </DetailsItem>
                </Detailts>
                <Devider></Devider>
                <span className="direction">
                  <a href="#move-to-map">{value.direction}</a>
                  <FaLongArrowAltRight className="arrow" />
                </span>
              </SectionRight>
            </TicketWrapper>
            <TicketWrapper $top={true}>
              <SectionLeft>
                <Image src={imgCuisine} />
              </SectionLeft>
              <SectionRight>
                <Content>
                  <div className="card__title left">{value.thirdCard}</div>
                  <AntDButton>
                    <a href="#location">{value.button}</a>
                  </AntDButton>
                </Content>
                <p className="info">{value.diversity}</p>
                <div className="info">{value.thirdCardInfo}</div>
                <Devider></Devider>
                <Detailts>
                  <DetailsItem>
                    <FaUser className="react__FaIcon" />
                    <div className="info">67.41 M</div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaGlobe className="react__FaIcon" />
                    <div className="info">
                      551.0 km<sup>2</sup>
                    </div>
                  </DetailsItem>
                  <DetailsItem>
                    <FaHome className="react__FaIcon" />
                    <div className="info">$425</div>
                  </DetailsItem>
                </Detailts>
                <Devider></Devider>
                <span className="direction">
                  <a href="#move-to-map">{value.direction}</a>
                  <FaLongArrowAltRight className="arrow" />
                </span>
              </SectionRight>
            </TicketWrapper>
          </div>
        );
      })}
    </Container>
  );
};
export default Facts;
