import { Container, HomeImg, Content, Blur, Button } from ".";
import home from "../../assets/images/home.jpg";
const Home = () => {
  return (
    <Container>
      <HomeImg src={home} alt={"home__image"} />
      <Blur />
      <Content>
        <h2>Experience the beauty of the East with us!</h2>
        <h1>China</h1>
        <Button>Contact Us</Button>
      </Content>
    </Container>
  );
};
export default Home;
