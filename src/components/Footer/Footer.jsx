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
    path: "/blogs",
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
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">

                  <span>
                    Haka Car Rentals <br />
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </Col>
          {/* SET NAMES */}
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Main links</h5>
              <ListGroup>
                {Links.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">About</h5>
              <p className="office__info">How it works</p>
              <p className="office__info">Featured</p>
              <p className="office__info">Partnership</p>
              <p className="office__info">Business Relations</p>
              <p className="office__info">Office Time: 24Hr
                Past middnight will have reduced staff</p>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">About</h5>
              <p className="office__info">How it works</p>
              <p className="office__info">Featured</p>
              <p className="office__info">Partnership</p>
              <p className="office__info">Business Relations</p>


              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          {/* SET NAMES */}
          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">©2022 HAKACARRENTALS. All rights reserved</p>
            </div>
          </Col>
          {/* SET NAMES */}
          {/* MOVE TO THE RIGHT ADD "Privacy & Policy" + "Terms & Condition" */}
          <Col lg="1" md="1" sm="1">
            <div className="mb-42">
              <h5 className="footer__link-title2">Newsletter</h5>
              <p className="section__description2">©2022 HAKACARRENTALS. All rights reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
