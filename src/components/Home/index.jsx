import { Container, HomeImg, Content, Blur, Button } from ".";
import home from "../../assets/images/home.jpg";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const dataToTranslate = [
    {
      homeSubtitle: t("home.homeSubtitle"),
      countryName: t("home.countryName"),
      contact: t("home.contact"),
    },
  ];
  return (
    <Container>
      <HomeImg src={home} alt={"home__image"} />
      <Blur />
      <Content>
        {dataToTranslate.map((value, index) => {
          return (
            <>
              <h2 key={index}>{value?.homeSubtitle}</h2>
              <h1>{value?.countryName}</h1>
              <Button>{value?.contact}</Button>
            </>
          );
        })}
      </Content>
    </Container>
  );
};
export default Home;
