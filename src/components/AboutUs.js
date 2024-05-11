import React from "react";
import AboutUsImage from "../images/aboutUs.png";

function AboutUs() {
  return (
    <div id="aboutUs" className="container-fluid">
      <div id="aboutUs-heading">
        <h4>About Us!</h4>
      </div>
      <div className="row container-fluid m-0 p-0">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={AboutUsImage} alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6 text-center">
          <div id="aboutUs-title">
            <h5> Welcome to Peregrination </h5>
          </div>
          <div>
            <p>
              Peregrination is not just a travel company; it's your gateway to a
              world of extraordinary experiences. Since our establishment in
              2005, we have been dedicated to providing unforgettable journeys
              for travel enthusiasts worldwide.
            </p>
            <p>
              Our team of experienced professionals is committed to ensuring
              that every journey with us is filled with exploration, adventure,
              and cultural enrichment. We take pride in curating travel
              experiences that go beyond the ordinary, creating memories that
              last a lifetime.
            </p>
            <p>
              At Peregrination, we understand that every traveler is unique.
              Whether you are seeking a relaxing beach retreat, a thrilling
              mountain expedition, or a culturally immersive city tour, we have
              the perfect travel packages designed just for you.
            </p>
            <p>
              Our mission is to turn your travel dreams into reality. Explore
              the world with Peregrination, where every destination is a story
              waiting to be told.
            </p>
            <p>
              Contact us today and embark on your next adventure with confidence
              and excitement!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
