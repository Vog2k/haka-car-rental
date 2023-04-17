import React from "react";
import { Container } from "reactstrap";
import "../../styles/ContactBanner.css"

const ContactBanner = ({ title }) => {
  return (
    <section className="ContactBanner mb-0">
      <Container className="text-center">
      <h4 className="titleContact">Contact us</h4>
      </Container>
    </section>
  );
};


export default ContactBanner;
