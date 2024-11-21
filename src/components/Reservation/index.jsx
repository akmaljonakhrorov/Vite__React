import React from "react";
import { Container, Button, Section, Form, Input, Content } from ".";
// send message to telegram bot via axios
import axios from "axios";

export const Reservation = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    const token = "7840662785:AAHZCWGajqSHMZCp76PmkvN3wo4n_extWvI";
    const myID = 294010010;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: myID,
        text: name,
      },
    })
      .then((res) => {
        alert("Success", res);
      })
      .catch((err) => {
        console.log("Smthing went wrong", err);
      });
  };
  return (
    <Container>
      <Section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.336692620658!2d69.26439781081066!3d41.30830658956247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b05d9b22dd1%3A0x54d0e020e1e0309e!2sLoca!5e0!3m2!1sen!2s!4v1731939447847!5m2!1sen!2s"></iframe>
      </Section>
      <Form id="myForm" onSubmit={sendMessage}>
        <div className="title">Make Your Reservation Through This Form</div>
        <Content>
          <label htmlFor="">
            Name
            <Input id="name" placeholder="Name" />
          </label>
          <label htmlFor="">
            Number of Guests
            <Input placeholder="1 or 2 or 3..." />
          </label>
        </Content>
        <div className="width__full">
          <label htmlFor="">
            Choose Your Destination
            <Input placeholder="Country" $width={true} />
          </label>
          <label htmlFor="">
            Choose Your Visa Support
            <Input placeholder="Ex.China" $width={true} />
          </label>
        </div>
        <Button type="submit">make a reservation now </Button>
      </Form>
    </Container>
  );
};

export default Reservation;
