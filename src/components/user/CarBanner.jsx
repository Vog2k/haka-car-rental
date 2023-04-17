import React from "react";
import { Container } from "reactstrap";
import "../../styles/CarBanner.css"

const CarBanner = ({ title }) => {
  return (
    <section className="CarBanner">
      <Container className="text-center">
        <h4 className="titleList">Book now</h4>
      </Container>
    </section>
  );
};


export default CarBanner;
