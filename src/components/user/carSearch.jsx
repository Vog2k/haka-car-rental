import React from "react";
import "../../styles/CarSearch.css";
import { Form, FormGroup } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const CarSearch = () => {
  return (
    
    <Form className="form3">
      <div className=" d-flex p-2 align-items-center justify-content-between flex-wrap ">


        <FormGroup className="form1">
          <h2>Pick up date</h2>
          <input type="date" placeholder="Date" required />
          
        </FormGroup>

        <h5 className="To">To</h5>

        <FormGroup className="form1">
        
          <h2>Pick up time</h2>
          <input
            className="estimatedTime" type="time" placeholder="Enter a pick up time"
            required
          />
        </FormGroup>


        <FormGroup className="form1">
        <Link to= '/cars'>
          <button className="btn searchCarButton">Search</button></Link>
        </FormGroup>
      </div>
    </Form>
  );
};

export default CarSearch;
