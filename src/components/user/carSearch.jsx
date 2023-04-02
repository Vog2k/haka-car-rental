import React from "react";
import "../../styles/CarSearch.css";
import { Form, FormGroup } from "reactstrap";

const CarSearch = () => {
  return (
    <Form className="form">
      <div className=" d-flex p-2 align-items-center justify-content-between flex-wrap">


        <FormGroup className="form1">
          <h2>Pick up & drop off</h2>
          <input type="date" placeholder="Date" required />
        </FormGroup>

        <FormGroup className="form1">
          <h2>Pick up time & drop off time</h2>
          <input
            className="estimatedTime"
            type="time"
            placeholder="Enter a pick up time"
            required
          />
        </FormGroup>


        <FormGroup className="form1">
          <button className="btn searchCarButton">Continue</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default CarSearch;
