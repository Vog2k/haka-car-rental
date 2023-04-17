import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/CarInfo.css";
import {Badge} from "reactstrap";

const CarInfoDup = (props) => {
  const { imgUrl, model, carName, automatic, seats,fuel, price, priceOff } = props.item;

  return (

    <Col lg="5" md="5" sm="5" xs="5" className="d-flex flex-column bd-highlight mb-1">


        <div className="car-Image ">
          <img src={imgUrl} alt="" className="w-100" />
        </div>  

        <div className="carItem1 ">      
        <div className="carItem-info1 ">
        <h4 className="section">{carName}</h4>
        <h6 className="section3">{model}</h6>
        
        </div>

        <div className="carItem-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <Badge color="primary">New</Badge><span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {fuel}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-team-fill"></i> {seats}
            </span>
          </div>
        <div className="d-flex bd-highlight">
          <h6 className="rentPrice p-2 flex-fill bd-highlight">
           <span style={{textDecoration: 'line-through'}}> ${price}.00 NZD 
        </span>{' '} <span>/Per Day</span></h6>
          
          <h6 className="rentPrice p-2 flex-fill bd-highlight">
            ${priceOff}.00 NZD <span>/Per Day</span></h6>
            
          </div>
          <button className=" w-100 carItem-btn1  carbtn-rent1">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

</div>


 
    </Col>

    
  );
};

export default CarInfoDup;
