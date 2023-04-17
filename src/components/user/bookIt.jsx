import React from "react";
import { Link } from "react-router-dom";

import "../../styles/BookIt.css";

const BookNow = () => {
  return (
    <>

      <div className="Main-Container">
      <div className="payment">
        <label htmlFor="" className="d-flex gap-4">
          <input type="radio" /> Payment on arrival
        </label>
      </div>
{/* NEEDS USERS PERSONAL DATE AND ADDED UP PRICE*/}
      <div className="payment ">
        <Link to= '/account'><button>Reserve Now</button></Link>   

        

        <h6 className="mt-3 d-flex align-items-center justify-content-between">We are using the most advanced security to provide you the best experience ever.</h6>
          <i class="ri-shield-check-fill"> All your data is stored and kept safe. For more information about our security please see the Contact us page </i>
          
      </div>
    </div>
                
    </>
  );
};

export default BookNow;
