import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 300px;
  padding: var(--padding);
  margin: auto;
  margin-top: 100px;
  background: rgb(1, 41, 76);
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
  width: 100%;
  height: 300px;
  color: white;
  padding: 25px;
`;
const Devider = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  background: white;
  height: 2px;
`;
export { Container, Content, Section, Devider };
