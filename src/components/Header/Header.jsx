import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

/* NAVIGATION */
const navLinks = [
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
    display: "Contact us",
  },

  {
    path: "/login",
    display: "LogIn/Register",
  },

];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menuActive");

  return (
    <header className="header">

      <div className="header1">
        <Container>
          <div className="navigationTop d-flex align-items-center justify-content-between">
                            {/* NORMAL H1 TAG WITH IMPORTED FONT STYLE*/}
              <h1 className="logo">Haka car rentals</h1>
            
              <div className="navigationS d-flex align-items-center justify-content-between">
            <span className="mobileMenu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "navActive nav1" : "nav1"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="navright">
            <Col lg="8" md="8" sm="8">
              <div className="HeaderCorner">
    
                      {/* Set up links Account*/}
                    <Link to="/account" className=" HeaderCornerAccount">
                  <i  class="ri-account-circle-fill"></i>
                  </Link>
                </div>
              </Col>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
