import React from "react";
import { Container, UserIcon, UserBackground, Input, SubmitBtn } from ".";
export const ModalReservation = () => {
  return (
    <Container>
      <UserBackground>
        <UserIcon />
      </UserBackground>
      <div className="subTitle">Please fill out this form.</div>
      <Input placeholder="Your name" />
      <Input placeholder="Your surname" />
      <Input placeholder="Your phone number" />
      <Input placeholder="Your Telegram username" />
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
};
export default ModalReservation;
