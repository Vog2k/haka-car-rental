import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/CarInfo.css";

const CarInfo = (props) => {
  const { imgUrl, model, carName, automatic, seats,fuel, price } = props.item;

  return (
    
    

    <Col lg="4" md="4" sm="6" className="mb-5">
  
      <div className="carItem">
      <h4 className="section2">{carName}</h4>
      <h5 className="section3">{model}</h5>
        <div className="carImage">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="carItem-content mt-4">



          <div className="carItem-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-gas-station-fill"></i> {fuel}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-team-fill"></i> {seats}
            </span>
          </div>
          <h6 className="rentPrice text-center mt-">
            ${price}.00 <span>/Per Day</span>
          </h6>
          <button className=" w-100 carItem-btn carbtn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>



        </div>
      </div>
    </Col>

    
  );
};

export default CarInfo;
