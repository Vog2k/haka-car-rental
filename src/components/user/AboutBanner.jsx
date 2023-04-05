import React from "react";
import { Container } from "reactstrap";
import "../../styles/AboutBanner.css";

const AboutBanner = ({ title }) => {
  return (
    <section className="ABanner mb-0">
      <Container className="text-center">
        <h1 className="textAbout">{title}</h1>
      </Container>
    </section>
  );
};

export default AboutBanner;
