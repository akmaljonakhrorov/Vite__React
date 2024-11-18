import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  height: 800px;
  margin-top: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  iframe {
    width: 100%;
    height: 450px;
    border-radius: 30px;
  }
`;
const Form = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1030px;
  height: 465px;
  .title {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 25px;
  }

  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: ${({ $width }) => ($width ? "100%" : "530px")};
  height: 35px;
  border: 1.5px solid rgb(175, 175, 175);
  border-radius: 10px;
  padding: 10px;
  outline: none;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: rgb(117, 164, 193);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background: #fff;
    color: rgb(117, 164, 193);
    border: 1px solid rgb(117, 164, 193);
  }
  margin-top: 20px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1290px;
  gap: 20px;
`;
export { Container, Section, Form, Content, Input, Button };
