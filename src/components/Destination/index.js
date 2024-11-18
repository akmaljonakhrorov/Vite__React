import styled from "styled-components";
const Container = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
`;

const Card = styled.div`
  max-width: 320px;
  padding: 15px;
  img {
    width: 100%;
    height: 400px;
    border-radius: 18px;
    object-fit: cover;
  }
`;

export { Container, Content, Card };
