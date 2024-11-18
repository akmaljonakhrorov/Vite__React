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

export const Facts = () => {
  return (
    <Container>
      <div className="subTitle">Interesting facts about China</div>
      <div className="title">
        China has a unique garden culture and history. In this section, we will
        provide you with interesting information.
      </div>
      <TicketWrapper>
        <SectionLeft>
          <Image src={imgTea} />
        </SectionLeft>
        <SectionRight>
          <Content>
            <div className="card__title left">Tea culture</div>
            <AntDButton>Explore More</AntDButton>
          </Content>
          <p className="info">Whole world</p>
          <div className="info">
            Embark on a railway adventure and explore destinations worldwide.
            Whether its the picturesque landscapes, bustling cities, or cultural
            gems, our rail services offer a unique and comfortable way to
            traverse the globe. Immerse yourself in the beauty of different
            cultures, all accessible through our extensive railway network.
          </div>
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
            Need diraections ?
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
            <div className="card__title left">The Middle Kingdom</div>
            <AntDButton>Explore More</AntDButton>
          </Content>
          <p className="info">China, The Middle Kingdom</p>
          <div className="info">
            (In Chinese, Tiānxià — 天下) is a concept of great significance in
            Chinese culture and history. This ancient phrase is used to describe
            China and the worldview associated with it. The concept of the
            Middle Kingdom developed during the imperial era of China, where it
            was seen as the place ruled by Heaven (Tian), and this rule was
            considered to extend to everything on Earth.
          </div>
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
            Need diraections ?
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
            <div className="card__title left">Chinese cuisine</div>
            <AntDButton>Explore More</AntDButton>
          </Content>
          <p className="info">The Diversity of Chinese Cuisine</p>
          <div className="info">
            Chinese cuisine is famous worldwide for its diversity of dishes.
            Each region is known for its unique dishes, for example, Sichuan
            cuisine is known for its spiciness, while Beijing is famous for
            Peking duck.
          </div>
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
            Need diraections ?
            <FaLongArrowAltRight className="arrow" />
          </span>
        </SectionRight>
      </TicketWrapper>
    </Container>
  );
};
export default Facts;
