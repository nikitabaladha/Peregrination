import React from "react";
import YellowstoneImage from "../images/yellowstone.png";
import statueOfLiberty from "../images/statueOfLiberty.png";
import AjantaEllora from "../images/ajantaEllora.png";
import Istanbul from "../images/istanbul.png";
import Tajmahal from "../images/tajMahal.png";
import EifelTower from "../images/eifelTower.png";
import Disneyland from "../images/disneyland.png";
import Berlin from "../images/berlin.png";
import Cappadocia from "../images/cappadocia.png";

function PackageGallery() {
  return (
    <div id="package-gallery" className="container-fluid">
      <div id="package-gallery-heading">
        <h4>Couch-Approved Adventures Await!</h4>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={YellowstoneImage}
                className="card-img-top card-img"
                alt="Yellowstone"
                id="package-gallery-images"
              />

              <div className="card-body">
                <h6 className="card-title">United States</h6>
                <p className="card-text">
                  Explore Yellowstone's wonders with guided tours, blending
                  geothermal marvels, wildlife spectacles, and stunning
                  landscapes for an awe-inspiring adventure.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1200</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={statueOfLiberty}
                className="card-img-top card-img"
                alt="Statue Of Liberty"
                id="package-gallery-images"
              />

              <div className="card-body">
                <h6 className=" card-title">United States</h6>
                <p className="card-text">
                  Uncover the spirit of liberty with our Statue of Liberty
                  tours, where Lady Liberty shares a stirring narrative of
                  freedom and the American dream.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1200</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={AjantaEllora}
                className="card-img-top"
                alt="ajanta Ellora"
                id="package-gallery-images"
              />

              <div className="card-body">
                <h6 className=" card-title">India</h6>
                <p className="card-text">
                  Immerse in the ancient wonders of Ajanta and Ellora Caves with
                  our tours, unveiling centuries-old artistry and spiritual
                  grandeur in India's cultural tapestry.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $600</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={Tajmahal}
                className="card-img-top"
                alt="Taj Mahal"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">India</h6>
                <p className=" card-text">
                  Discover timeless love at the Taj Mahal with our tours, where
                  iconic beauty merges with India's rich history and cultural
                  splendor.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $600</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={EifelTower}
                className="card-img-top"
                alt="EifelTower"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">France</h6>
                <p className="card-text">
                  Elevate your experience in the City of Love with our Eiffel
                  Tower tours, offering luxury and panoramic views for
                  unforgettable moments.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1500</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={Disneyland}
                className="card-img-top"
                alt="Disneyland"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">France</h6>
                <p className="card-text">
                  Step into enchantment at Disneyland with our captivating
                  tours, where fairy tales come alive, creating magical
                  adventures for the young and young at heart.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1500</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={Berlin}
                className="card-img-top"
                alt="Berlin"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">Germany</h6>
                <p className="card-text">
                  Explore Berlin's rich history and vibrant culture with our
                  expertly guided tours, creating unforgettable memories for
                  every traveler.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1300</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card my-hover-effect">
              <img
                src={Cappadocia}
                className="card-img-top"
                alt="Cappadocia"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">Turkey</h6>
                <p className="card-text">
                  Discover the enchanting landscapes of Cappadocia with our
                  curated tours, where fairy-tale-like rock formations and hot
                  air balloon adventures await.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1000</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card  my-hover-effect">
              <img
                src={Istanbul}
                className="card-img-top"
                alt="Istanbul"
                id="package-gallery-images"
              />
              <div className="card-body">
                <h6 className=" card-title">Turkey</h6>
                <p className="card-text">
                  Immerse yourself in the mesmerizing blend of East and West in
                  Istanbul, where our guided tours unfold the city's captivating
                  tales and cultural wonders.
                </p>
                <div className="footer">
                  <div id="star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h6>Price: $1000</h6>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageGallery;
