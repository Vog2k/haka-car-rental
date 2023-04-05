import React from 'react'

import { Container, Row, Col } from "reactstrap";
import AboutInfo from "../components/user/About1"
import Header2 from '../components/header2/header2';
import AboutBanner from '../components/user/AboutBanner';

import img from "../assets/figmaImages/cars-img/1935006930.jpg";

const about = () => {
  return (
<Header2 title="About">
      <AboutBanner title="About Us" />
      <AboutInfo aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={img} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
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