import React from "react";

function Home() {
  return (
    <div id="home" className="jumbotron">
      <div className="background-image">
        <h1>
          Welcome to <span className="brand-name">Peregrination</span>
        </h1>
        <h2 id="place-name">
          Visit <span id="dynamic-country"></span>
        </h2>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
}

export default Home;
