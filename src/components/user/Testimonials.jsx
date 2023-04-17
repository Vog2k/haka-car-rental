import React from "react";
import Slider from "react-slick";

import "../../styles/Testimonials.css";



import WC1 from "../../assets/figmaImages/WC1.PNG";
import WC2 from "../../assets/figmaImages/WC2.PNG";
import WC3 from "../../assets/figmaImages/WC3.PNG";
import WC4 from "../../assets/figmaImages/WC4.PNG";
/* ALL IMAGES WERE TAKEN FROM https://www.whitecliffe.ac.nz/our-faculty */


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section3">
        "Haka Car Rentals exceeded my expectations in every way possible. 
        The booking process was simple, the car was clean and well-maintained, 
        and the staff were friendly and professional. I felt safe and comfortable driving the car, 
        and I had no issues throughout my rental period. I would definitely use Haka Car Rentals again 
        and recommend them to anyone in need of a car rental in New Zealand!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={WC1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mark Worsop</h6>
            <p className="section3">Customer</p>
            
            <div className="group">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section3">
        "I was extremely impressed with the service I received 
        from Haka Car Rentals. The staff were knowledgeable and 
        helpful, and they went above and beyond to ensure that 
        my rental experience was seamless. The car was in excellent 
        condition and I had no issues during my rental period. I would 
        highly recommend Haka Car Rentals to anyone in need of a rental 
        car in New Zealand!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={WC2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Muhammad Azam</h6>
            <p className="section3">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section3">
        "I recently rented a car from Haka Car Rentals 
        for a weekend trip with friends. The car was comfortable 
        and reliable, and we had no issues during our journey. 
        The team at Haka Car Rentals were professional and friendly, 
        and their rates were very competitive. I will definitely be 
        using their services again!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={WC3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Roman Mitch</h6>
            <p className="section3">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section3">
        "I had a fantastic experience with Haka Car Rentals! The booking 
        process was seamless and easy, and the car was in great condition 
        when I picked it up. The staff were friendly and helpful, 
        and I was able to explore New Zealand with ease. 
        I highly recommend Haka Car Rentals to anyone looking for a reliable car rental service!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={WC4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Shahbaz Pervez Chattha</h6>
            <p className="section3">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
