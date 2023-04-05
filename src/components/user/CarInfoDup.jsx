import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/CarInfo.css";

const CarInfoDup = (props) => {
  const { imgUrl, model, carName, automatic, seats,fuel, price } = props.item;

  return (

    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item1">
      <h4 className="section__title1">{carName}</h4>
      <h5 className="section__title1">{model}</h5>
        <div className="carImage1">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content1 mt-4">



          <div className="car__item-info1 d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {fuel}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {seats}
            </span>
          </div>
          <h6 className="rent__price text-center1 mt-">
            ${price}.00 <span>/ Day</span>
          </h6>
          <button className=" w-100 car__item-btn1 car__btn-rent1">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>



        </div>
      </div>
    </Col>

    
  );
};

export default CarInfoDup;
