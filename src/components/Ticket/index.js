import styled from "styled-components";
import { Button } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
  min-width: 320px;
  height: 800px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const TicketWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: ${({ $top }) => $top && "40px"};
`;

const SectionLeft = styled.section`
  display: flex;
  flex: 0.4;
  /* width: 40%; */
`;
const SectionRight = styled.section`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  padding: 0px 30px;
  .info {
    font-size: 15px;
    font-weight: 400;
    line-height: 32px;
    color: rgb(175, 175, 175);
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  .card__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: rgb(42, 42, 42);
  }
`;

const AntDButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 45px;
  border: none;
  border-radius: 30px;
  background: rgb(117, 164, 193);
  color: black;
  font-weight: 500;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background: white;
    color: rgb(117, 164, 193);
    transform: scale(1.1);
    border: 1px solid #75a4c1;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 35px;
`;
const Devider = styled.div`
  display: flex;
  height: 2px;
  width: 100%;
  background-color: rgb(172, 172, 172, 0.3);
  margin-top: 40px;
`;
export {
  Container,
  TicketWrapper,
  SectionLeft,
  SectionRight,
  Content,
  AntDButton,
  Image,
  Devider,
};
