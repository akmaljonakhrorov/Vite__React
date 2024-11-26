import {
  Container,
  HomeImg,
  Content,
  Blur,
  Button,
  AntModal,
  Wrapper,
  UserBackground,
  SubmitSection,
  Section,
  SubmitBtn,
  Input,
  UserIcon,
} from ".";
import { useState } from "react";
import home from "../../assets/images/home.jpg";
import { useTranslation } from "react-i18next";
import img from "../../assets/images/userImg.png";
import axios from "axios";
const Home = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      homeSubtitle: t("home.homeSubtitle"),
      countryName: t("home.countryName"),
      contact: t("home.contact"),
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

  const [loading, setLoading] = useState(false);
  const sendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7840662785:AAHZCWGajqSHMZCp76PmkvN3wo4n_extWvI";
    const myID = 294010010;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const surname = document.getElementById("surname").value;
    const userName = document.getElementById("userName").value;
    const messageContent = `Name: ${name} \nSurname: ${surname} \nPhone Number: ${phoneNumber} \nUser Name: ${userName}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: myID,
        text: messageContent,
      },
    })
      .then((res) => {
        setIsModalOpen(false);
        document.getElementById("myForm").reset();
        alert("Successfully sent");
      })
      .catch((err) => {
        console.log("Smthing went wrong", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container id="home">
      <HomeImg src={home} alt={"home__image"} />
      <Blur />
      <Content>
        {dataToTranslate.map((value, index) => {
          return (
            <div key={index}>
              <h2 key={index}>{value?.homeSubtitle}</h2>
              <h1>{value?.countryName}</h1>
              <Wrapper>
                <form id="myForm" onSubmit={sendMessage}>
                  <Button onClick={showModal}>{value?.contact}</Button>
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
                      <Input placeholder={value?.name} required id="name" />
                      <Input
                        placeholder={value?.phoneNumber}
                        required
                        id="phoneNumber"
                      />
                    </Section>
                    <Section>
                      <Input
                        placeholder={value?.surname}
                        required
                        id="surname"
                      />
                      <Input
                        placeholder={value?.telegramUsName}
                        id="userName"
                        required
                      />
                    </Section>
                    <SubmitSection>
                      <SubmitBtn type="submit" loading={loading}>
                        {loading ? "Data is sending..." : `${value?.submit}`}
                      </SubmitBtn>
                    </SubmitSection>
                  </AntModal>
                </form>
              </Wrapper>
            </div>
          );
        })}
      </Content>
    </Container>
  );
};
export default Home;
