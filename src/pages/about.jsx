import React from 'react'

import { Container, Row, Col } from "reactstrap";
import AboutInfo from "../components/user/About1"
import Header2 from '../components/header2/header2';
import AboutBanner from '../components/user/AboutBanner';

import img from "../assets/figmaImages/cars-img/pexels-antoni-shkraba-7144172.jpg";

const about = () => {
  return (
<Header2 title="About">
      <AboutBanner title="About Us" />
      <AboutInfo aboutClass="aboutPage" />

      <section className="about1">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="aboutImg">
                <img src={img} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="aboutContent">
                <h2 className="titleAbout">We Are Committed To Provide Safe Ride Solutions
                </h2>
                <p className="informatinoPart">
                At Haka Car Rentals, we understand that renting a car can be stressful, especially if you're in a new place. That's why we believe it's important to help our customers with everything along the way, from booking to returning the car.
                </p>

                <p className="informatinoPart">
                We offer a variety of car rental options to fit your needs, whether you're traveling for business or pleasure. Our knowledgeable staff is here to answer any questions you may have about the rental process, and can provide recommendations for local attractions or restaurants.
                </p>

                <p className="informatinoPart">
                We also offer flexible pick-up and drop-off options to make your rental experience as convenient as possible. Whether you need a car at the airport or at your hotel, we've got you covered.

                At Haka Car Rentals, we want to make your car rental experience easy and stress-free. Let us help you get where you need to go.
                </p>
              
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Header2>
  );
};

export default about