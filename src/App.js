// App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import PackageGallery from "./components/PackageGallery";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <BookingForm />
        <PackageGallery />
        <Services />
        <AboutUs />
        <PhotoGallery />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
