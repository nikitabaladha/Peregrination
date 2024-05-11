import React from "react";
import Car from "../images/car.png";
import Customer from "../images/customer.png";
import Chef from "../images/chef.png";
import Guide from "../images/guide.png";
import Hotel from "../images/hotel.png";
import LocalEvent from "../images/localEvent.png";

function Services() {
  return (
    <div id="services" className="container-fluid">
      <div id="services-heading">
        <h4>All Your Travel Whims Served!</h4>
      </div>
      <div className=" container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center ">
            <div className="card ">
              <img src={Car} className="card-img-top wave-image" alt="Car" />

              <div className="card-body">
                <h6 className="card-title">Car Rentals</h6>
                <p className="card-text">
                  Explore freely with diverse car rentals for a personalized
                  travel experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
            <div className="card">
              <img
                src={Customer}
                className="card-img-top wave-image"
                alt="customer support"
              />
              <div className="card-body">
                <h6 className="card-title">24/7 Customer Support</h6>
                <p className="card-text">
                  24/7 customer support for a smooth, worry-free travel
                  experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
            <div className="card ">
              <img src={Chef} className="card-img-top wave-image" alt="Chef" />
              <div className="card-body">
                <h6 className="card-title">Dining Reservations</h6>
                <p className="card-text">
                  Seamless dining adventures, secure reservations, ensuring
                  delightful journeys.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
            <div className="card ">
              <img
                src={Guide}
                className="card-img-top wave-image"
                alt="Guide"
              />
              <div className="card-body">
                <h6 className="card-title">Guided Tours</h6>
                <p className="card-text">
                  Explore expert-guided tours, immerse in culture, history, and
                  adventure.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
            <div className="card ">
              <img
                src={Hotel}
                className="card-img-top wave-image"
                alt="Hotel"
              />
              <div className="card-body">
                <h6 className="card-title">Hotel Accommodations</h6>
                <p className="card-text">
                  Curated hotels, budget-friendly with discounted rates, for a
                  memorable stay.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
            <div className="card ">
              <img
                src={LocalEvent}
                className="card-img-top wave-image"
                alt="Local Event"
              />
              <div className="card-body">
                <h6 className="card-title">Event and Attraction Tickets</h6>
                <p className="card-text">
                  Unforgettable experiences, providing access to cultural shows
                  and top attractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
