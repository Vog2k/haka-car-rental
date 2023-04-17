import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Alert } from "reactstrap";

const Booking = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>

    <h6>First Name</h6>
      <FormGroup className="bookingForm d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <h6>Last Name</h6>
      <FormGroup className="bookingForm d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>
      <h6>Email Address</h6>
      <FormGroup className="bookingForm d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <h6>Phone</h6>
      <FormGroup className="bookingForm d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>
      <h6>Pick up</h6>
      <Alert>
    Auckland, Avondale{' '}
    <a
      className="alert-link"
      href="https://goo.gl/maps/mRQBGCo6Ry2StxW68"
      rel="noreferrer"
      target="_blank"
    >
      Timothy place.
    </a>
    . Give it a click if you like.
  </Alert>


      <h6>Drop off</h6>
      <FormGroup className="bookingForm d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="bookingForm d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Estimated drop off time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default Booking;
