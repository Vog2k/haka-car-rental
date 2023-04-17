import React from "react";
import { Container } from "reactstrap";
import "../../styles/AccountBanner.css";

const AccountBanner = ({ title }) => {
  return (
    <section className="ACCBanner mb-58">
      <Container className="text-center">
        <h1 className="textLog">Account Overview</h1>
      </Container>
    </section>
  );
};

export default AccountBanner;
