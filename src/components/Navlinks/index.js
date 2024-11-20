import styled from "styled-components";

const List = styled.li`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  select {
    width: 100%;
    max-width: 130px;
    height: 44px;
    margin-left: 50px;
    border: 1px solid rgb(146, 63, 51);
    padding: 8px;
    font-size: 18px;
    font-weight: 400;
  }
  .contact {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
`;
export { List, Section };
