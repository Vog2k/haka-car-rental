import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header2 from "../components/header2/header2";
import CarItem from "../components/user/CarInfo";
import carData from "../assets/data/carData";
import CarBanner from "../components/user/CarBanner";


const CarList = () => {
  return (
    <Header2 title="Cars">
    <CarBanner />
      <section>
        <Container>
          <Row>
            <Col lg="2">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>


              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Header2>
  );
};

export default CarList;
