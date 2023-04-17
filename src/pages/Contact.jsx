import React from "react";

import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Header2 from "../components/header2/header2";
import ContactBanner from "../components/user/ContactBanner";

import "../styles/contact.css";



const Contact = () => {
  return (
    <Header2 title="Contact">
      <ContactBanner />
      <section>
        <Container className="text-center">
          <Row>
            <Col>
            <h5 className="fw-bold mb-4 text-center ">Contact form</h5>
            <hr/>
              <h6 className="fw-bold mb-4 text-center ">Give us a call or send a message!</h6>
              <section className="out">
              <Form >
              <h6 className="firstName fw-bold">First name</h6>

                <FormGroup className="contactForm" >
                  <Input placeholder="Enter Your First Name" type="text" />
                  
                </FormGroup>
                <h6 className="lastName fw-bold ">Last name</h6>
                <FormGroup className="contactForm">
                  <Input placeholder="Enter Your Last Name" type="text" />
                  
                </FormGroup>
                <h6 className="emailAdd fw-bold ">Email address</h6>
                <FormGroup className="contactForm">
                  <Input placeholder="Enter Email Address" type="email" />
                </FormGroup>
                <h6 className="phoneNumber fw-bold ">Phone number</h6>
                <FormGroup className="contactForm">
                  <Input placeholder="Enter Your Phone" type="Phone" />
                  
                </FormGroup>
                
                <FormGroup className="contactForm">
                  <textarea rows="10"placeholder="Send us a message" className="textarea"
                  ></textarea>
                </FormGroup>

                

                <button className=" contactButton" type="submit">
                  Send It
                </button>     
              </Form></section>
            </Col>

          

          </Row>
        </Container>
      </section>

    </Header2>
  );
};

export default Contact;
