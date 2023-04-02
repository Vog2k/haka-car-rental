import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero.css";

const Hero = () => {

  return (
    <Slider className="heroImage">
      <div className="bannerImage bannerImage01 mt0">
        <Container>
          <div className="bannerContent">
            <h1 className="text-light mb-4">E­xplore New Zealand in style</h1>

            <button className="bannerButton">
              <Link to="/cars">E­xplore Now</Link>
            </button>
          </div>
        </Container>
      </div>

    </Slider>
  );
};

export default Hero;
