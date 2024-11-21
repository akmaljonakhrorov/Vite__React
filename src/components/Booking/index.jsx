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
import home from "../../assets/images/home.jpg";
import { useTranslation } from "react-i18next";
const Booking = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      subtitle: t("booking.subtitle"),
      title: t("booking.title"),
      button: t("booking.button"),
      phone: t("booking.phone"),
      number: t("booking.number"),
      email: t("booking.email"),
      emailAddress: t("booking.emailAddress"),
      office: t("booking.office"),
      address: t("booking.address"),
    },
  ];
  return (
    <Container>
      {dataToTranslate.map((value, index) => {
        return (
          <>
            <HomeImg src={home} alt={"city with the lake"} />
            <Blur />
            <Content>
              <h2>{value.subtitle}</h2>
              <h1>{value.title}</h1>
              <Button>{value.button}</Button>
            </Content>
            <Section>
              <SectionItem>
                <ContactIcon>
                  <FaPhoneAlt className="contact__icon" />
                </ContactIcon>
                <div className="phone__call">{value.phone}</div>
                <div className="phone__number">{value.number}</div>
              </SectionItem>
              <SectionItem>
                <ContactIcon>
                  <FaEnvelope className="contact__icon" />
                </ContactIcon>
                <div className="phone__call">{value.email}</div>
                <div className="phone__number">{value.emailAddress}</div>
              </SectionItem>
              <SectionItem>
                <ContactIcon>
                  <FaLocationDot className="contact__icon" />
                </ContactIcon>
                <div className="phone__call">{value.office}</div>
                <div className="phone__number">{value.address}</div>
              </SectionItem>
            </Section>
          </>
        );
      })}
    </Container>
  );
};
export default Booking;
