import React from "react";
import { Container } from "reactstrap";
import "../../styles/loginBanner.css";

const LoginBanner = ({ title }) => {
  return (
    <section className="LBanner mb-0">
      <Container className="text-center">
        <h1 className="textLog">Login or Register</h1>
      </Container>
    </section>
  );
};

export default LoginBanner;
