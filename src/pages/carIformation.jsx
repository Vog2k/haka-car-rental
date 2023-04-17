import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Header2 from "../components/header2/header2";
import { useParams } from "react-router-dom";
import Booking from "../components/user/BookingForm"
import BookNow from "../components/user/bookIt";
import CarBanner from "../components/user/CarBanner";


const CarInformation = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {window.scrollTo(0, 0);}, [singleCarItem]);

  return (
    
    
    <Header2 title={singleCarItem.carName}>
    <CarBanner />
      <section>
        <Container>

        
          <Row>
          <Col xs="6">
              <div className="booking-info mt-5">
                <h4 className="mb-4 fw-bold ">Billing Information</h4>
                <h5>Please enter your billing info</h5>
                <Booking />
                
              </div>
              <Form>
                <FormGroup
                  check
                  inline
                >
                  <Input type="checkbox" />
                  <Label check>
                  I agree with sending an Marketing and newsletter emails. No spam, promissed!
                  </Label>
                </FormGroup>
                <FormGroup
                  check
                  inline>
                  <Input type="checkbox" />
                  <Label check>
                  I agree with our terms and conditions and privacy policy.
                  </Label>
                </FormGroup>
              </Form>
              <Col lg="10" className="mt-5">
              <div className="payment__info mt-1">
                <h5 className="mb-4 fw-bold ">Payment 
                Confirmation</h5>
                <h6 className="rentPrice fw-bold fs-10">
                    ${singleCarItem.price}.00 NZD / Day
                  </h6>
                  

              </div>
            </Col>
            </Col>

            <Col lg="6">
              <div className="carInfo">
                <h5 className="section1">{singleCarItem.carName}</h5>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rentPrice fw-bold fs-4">
                    ${singleCarItem.price}.00 NZD / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section3">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section3">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section3">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section3">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section3">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section3">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section3">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
              <img src={singleCarItem.imgUrl} alt="" className="w-100 p-1" />
              <img src={singleCarItem.imgUrl2} alt="" className="w-50 p-1" />
              <img src={singleCarItem.imgUrl3} alt="" className="w-50 p-1" />            
              </Col>

              
           
              <BookNow />




          </Row>
        </Container>
      </section>
    </Header2>
  );
};

export default CarInformation;
