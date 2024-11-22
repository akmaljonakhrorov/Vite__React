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
  @media only screen and (max-width: 480px) {
    width: 100%;
    max-width: 480px;
    min-height: 560px;
    padding-top: 32px;
    padding-bottom: 24px;
    padding: 0px 0px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    min-width: 768px;
    min-height: 400px;
    padding: 0px 0px !important;
  }
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 50px 0px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
  width: 100%;
  max-height: 300px;
  color: white;
  padding: 15px;
  gap: 15px;
  .content__items {
    cursor: pointer;
  }
  .content__item a {
    color: white;
    text-decoration: none;
    font-size: 26px;
  }
  .title {
    padding: 0px !important;
    margin: opx !important;
    text-align: left;
    text-decoration: none;
    color: white;
    @media only screen and (max-width: 480px) {
      font-size: 18px;
      text-align: center;
      max-width: 415px;
      max-height: 50px;
    }
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    color: white;
    max-height: 230px;
    padding-top: 10px;
  }
  @media only screen and (max-width: 768px) {
    * {
      display: flex;
      align-self: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
    .title {
      margin-top: 10px;
    }
    .content__items {
      padding-top: 10px;
    }
  }
`;
const Devider = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  background: white;
  height: 2px;
`;
export { Container, Content, Section, Devider };
