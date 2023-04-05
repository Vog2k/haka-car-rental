import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/About1.css";
import Info from "./information";



const AboutInfo = ({ aboutClass }) => {
  return (
    <section
      className="aboutSection"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >

    
      <Container>
        <Row>
          <Col lg="" md="">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Haka car rentals !</h2>
              <p className="section__description">
              Welcome to Haka Rentals, a premier rental company providing reliable and 
              affordable transportation solutions to customers across New Zealand. Our 
              company is dedicated to delivering exceptional customer service and ensuring a 
              stress-free rental experience for all of our clients.

              Founded in 2010, Haka Rentals has quickly become one of the most trusted rental 
              companies in New Zealand. Our mission is to provide high-quality vehicles at competitive 
              prices, without compromising on safety or comfort. We pride ourselves on offering a wide 
              range of rental options to suit every budget and need. <br></br><br></br>

              At Haka Rentals, we believe that great service starts with great people. 
              That's why we hire only the best and most experienced rental professionals 
              in the industry. Our team is passionate about providing personalized service 
              and ensuring that every customer is satisfied with their rental experience.<br></br><br></br>

              We offer a wide variety of rental vehicles to suit your needs, from compact cars to 
              spacious SUVs and everything in between. All of our vehicles are meticulously maintained 
              and regularly serviced to ensure maximum reliability and safety.<br></br><br></br>

              Whether you're traveling for business or pleasure, Haka Rentals is the perfect choice for 
              all your rental needs. We offer flexible rental terms and convenient pick-up and drop-off 
              locations across New Zealand. Our goal is to make your rental experience as convenient and 
              hassle-free as possible, so you can focus on enjoying your trip.<br></br><br></br>

              Thank you for choosing Haka Rentals. We look forward to serving you and exceeding your 
              expectations.
              </p>


            </div>

            <div className="about__img">

            </div>
            <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">More information</h6>
              <h2 className="section__title">Need to know</h2>
            </Col>
              
            <Info />

          </Row>
        </Container>
      </section>
          </Col>
        </Row>
      </Container>
    </section>
    
    
  );
};

export default AboutInfo;
