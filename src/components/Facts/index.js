import styled from "styled-components";
import { Button } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 96px;
  .subTitle,
  .title {
    text-align: left;
    margin-bottom: 0px;
  }
`;

const TicketWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
  margin-top: ${({ $top }) => $top && "40px"};
  border-bottom: 1px solid black;
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
  height: fit-content;
`;
const Devider = styled.div`
  display: flex;
  height: 1.5px;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(172, 172, 172, 0.3);
`;
const Detailts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
`;
const DetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  Detailts,
  DetailsItem,
};
