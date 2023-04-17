import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Links = [
  {
    path: "/home",
    display: "Home",
  },
  {

    path: "/cars",
    display: "Book Now",
  },
  {
    path: "/about",
    display: "About us",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },

  {
    path: "/login",
    display: "LogIn/Register",
  },
];
/* SET NAMES */
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footerBlerb">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">

                  <span>
                    Haka Car Rentals
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footerBlerb">
              Support your local business.
            </p>
          </Col>
          {/* SET NAMES */}
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footerLink">Main links</h5>
              <ListGroup>
                {Links.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footerLink mb-4">About</h5>
              <p className="info">How it works</p>
              <p className="info">Featured</p>
              <p className="info">Partnership</p>
              <p className="info">Business Relations</p>
              <p className="info">Office Time: 24Hr
                Past middnight will have reduced staff</p>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footerLink mb-4">About</h5>
              <p className="info">How it works</p>
              <p className="info">Featured</p>
              <p className="info">Partnership</p>
              <p className="info">Business Relations</p>


              <p className="info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footerLink">Newsletter</h5>
              <p className="section__description">©2022 HAKACARRENTALS. All rights reserved</p>
            </div>
          </Col>
          {/* SET NAMES */}
          {/* MOVE TO THE RIGHT ADD "Privacy & Policy" + "Terms & Condition" */}
          <Col row no-gutters>
            <div className="col-12 col-sm-6 col-md-8">
              <h5 className="footerLink">Privacy & Policy</h5>
              <p className="description">Terms & Conditions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
