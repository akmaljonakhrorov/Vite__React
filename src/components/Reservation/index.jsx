import React from "react";
import { Container, Button, Section, Form, Input, Content } from ".";

export const Reservation = () => {
  return (
    <Container>
      <Section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.336692620658!2d69.26439781081066!3d41.30830658956247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b05d9b22dd1%3A0x54d0e020e1e0309e!2sLoca!5e0!3m2!1sen!2s!4v1731939447847!5m2!1sen!2s"></iframe>
      </Section>
      <Form>
        <div className="title">Make Your Reservation Through This Form</div>
        <Content>
          <Input aria-label="name" placeholder="Name" />
          <Input placeholder="Number of guests" />
        </Content>
        <div className="width__full">
          <p className="input__label">Choose Your Destination</p>
          <Input placeholder="Country" $width={true} />
          <p className="input__label">Choose Your Visa Support</p>
          <Input placeholder="Ex.China" $width={true} />
        </div>
        <Button>make a reservation now </Button>
      </Form>
    </Container>
  );
};

export default Reservation;
