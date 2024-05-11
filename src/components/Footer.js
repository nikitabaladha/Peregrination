import React from "react";
import FooterServices from "../images/footer_Services.png";
import CustomerSupport from "../images/footer_Customer_Support.png";
import Dining from "../images/footer_Dining.png";
import TravelGuide from "../images/footer_TravelGuide.png";
import Hotel from "../images/footer_Hotel.png";
import Events from "../images/footer_events.png";
import Logo from "../images/footer_Logo.png";

function Footer() {
  return (
    <div id="footer" className="container-fluid">
      <div className="container-fluid">
        <div className="row footer-text ">
          <div className=" col-md-8">
            <div className="row ">
              <div className="col-md-4">
                <h5>EXPLORE</h5>
                <ul>
                  <li>
                    <i className="bi bi-house-heart"></i>Home
                  </li>
                  <li>
                    <i className="bi bi-hand-index-thumb"></i>Book Now
                  </li>
                  <li>
                    <i className="bi bi-person-circle"></i>About Us
                  </li>
                  <li>
                    <i className="bi bi-luggage-fill"></i>Packages
                  </li>
                  <li>
                    <img src={FooterServices} alt="Services icon" />
                    Services
                  </li>
                  <li>
                    <i className="bi bi-image"></i>Gallery
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>OUR BEST SERVICES</h5>
                <ul>
                  <li>
                    <i className="bi bi-car-front"></i>Car Rentals
                  </li>
                  <li>
                    <img src={CustomerSupport} alt="Customer support icon" />
                    24/7 Customer Support
                  </li>
                  <li>
                    <img src={Dining} alt="Restaurant icon" />
                    Dining Reservations
                  </li>
                  <li>
                    <img src={TravelGuide} alt="Guide icon" />
                    Guided Tours
                  </li>
                  <li>
                    <img src={Hotel} alt="Hotel icon" />
                    Hotel Accommodations
                  </li>
                  <li>
                    <img src={Events} alt="Event icon" />
                    Event Booking
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>ADDRESS</h5>
                <div>
                  <p>
                    <strong>Your Epic Journey Begins Here</strong>
                  </p>
                  <p>123 Adventure Street</p>
                  <p>Lucknow, India</p>
                  <p>Zip Code: 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <span>
                <img src={Logo} alt="Brand Logo" id="footer-brand-logo" />
                <h5>PEREGRINATION</h5>
              </span>
              <p id="footer-text">
                Discover the world with Peregrination - your gateway to
                extraordinary adventures. Unleash the spirit of exploration,
                where every journey becomes a memorable tale of wanderlust.
              </p>
            </div>

            <div>
              <h5>LET'S STAY CONNECTED</h5>
              <p>Email: info@Peregrination.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div id="social_media_link" className="text-center mt-4">
          <h5>GET IN TOUCH</h5>
          <div className="d-flex justify-content-center">
            <i className="bi bi-google mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-instagram mx-2"></i>
            <i className="bi bi-whatsapp mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-youtube mx-2"></i>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Peregrination. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
