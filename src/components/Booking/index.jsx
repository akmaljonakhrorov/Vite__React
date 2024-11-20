import {
  Container,
  HomeImg,
  Content,
  Blur,
  Button,
  Section,
  SectionItem,
  ContactIcon,
} from ".";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import booking from "../../assets/images/booking.jpeg";
import home from "../../assets/images/home.jpg";
const Booking = () => {
  return (
    <Container>
      <HomeImg src={home} alt={"city with the lake"} />
      <Blur />
      <Content>
        <h2>Book Prefered Deal Here</h2>
        <h1>Make Your Reservation</h1>
        <Button>Contact Us</Button>
      </Content>
      <Section>
        <SectionItem>
          <ContactIcon>
            <FaPhoneAlt className="contact__icon" />
          </ContactIcon>
          <div className="phone__call">Make a Phone Call</div>
          <div className="phone__number">+998 77 111 37 77</div>
        </SectionItem>
        <SectionItem>
          <ContactIcon>
            <FaEnvelope className="contact__icon" />
          </ContactIcon>
          <div className="phone__call">Contact Us via Email</div>
          <div className="phone__number">tourland@mail.ru</div>
        </SectionItem>
        <SectionItem>
          <ContactIcon>
            <FaLocationDot className="contact__icon" />
          </ContactIcon>
          <div className="phone__call">Visit Our Offices</div>
          <div className="phone__number">
            Yakkasaray District, 1 Borijar Street.
          </div>
        </SectionItem>
      </Section>
    </Container>
  );
};
export default Booking;
