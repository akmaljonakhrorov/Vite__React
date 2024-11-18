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

export const Ticket = () => {
  return (
    <Container>
      <div className="subTitle">
        Find Tickets With us Easily and at a Low Price
      </div>
      <div className="title">
        Find the best deals on railway and airplane tickets in each city,
        carefully selected for you.
      </div>
      <TicketWrapper>
        <SectionLeft>
          <Image src={imgMetro} />
        </SectionLeft>
        <SectionRight>
          <Content>
            <div className="card__title left">
              Cheap Railway Tickets With Us
            </div>
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
              Discover Exciting Air Travel Dealss
            </div>
            <AntDButton>Explore More</AntDButton>
          </Content>
          <p className="info">Global Destinations</p>
          <div className="info">
            Embark on a railway adventure and explore destinations worldwide.
            Whether its the picturesque landscapes, bustling cities, or cultural
            gems, our rail services offer a unique and comfortable way to
            traverse the globe. Immerse yourself in the beauty of different
            cultures, all accessible through our extensive railway network.
          </div>
        </SectionRight>
      </TicketWrapper>
    </Container>
  );
};
export default Ticket;
