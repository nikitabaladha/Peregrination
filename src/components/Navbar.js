import React from "react";
import logo from "../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import ModalContainer from "../container/ModalContainer";

import "../App.css";

function Navbar() {
  return (
    <>
      <ModalContainer />

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Brand Logo" id="brand-logo" />
            <span>Peregrination</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth to="#home" className="nav-link">
                  <i className="bi bi-house-heart-fill"></i>
                  <span className="icon-text">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link smooth to="#book" className="nav-link">
                  <i className="bi bi-hand-index-thumb-fill"></i>
                  <span className="icon-text">Book</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-luggage-fill"></i>
                  <span className="icon-text">Packages</span>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item nav-link"
                      smooth
                      to="#package-gallery"
                    >
                      United-states
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link"
                      smooth
                      to="#package-gallery"
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link"
                      smooth
                      to="#package-gallery"
                    >
                      France
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link"
                      smooth
                      to="#package-gallery"
                    >
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item nav-link"
                      smooth
                      to="#package-gallery"
                    >
                      Turkey
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  to="#services"
                  aria-disabled="true"
                >
                  <i className="bi bi-sliders"></i>
                  <span className="icon-text">Services</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  to="#gallery"
                  aria-disabled="true"
                >
                  <i className="bi bi-image"></i>
                  <span className="icon-text">Gallery</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  to="#aboutUs"
                  aria-disabled="true"
                >
                  <i className="bi bi-file-earmark-person"></i>
                  <span className="icon-text">About</span>
                </Link>
              </li>
            </ul>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-success me-md-2"
                type="button"
                id="btn-login"
                data-bs-toggle="modal"
                data-bs-target="#loginmodal"
              >
                Login
              </button>
              <button
                className="btn btn-outline-success me-md-2"
                type="button"
                id="btn-register"
                data-bs-toggle="modal"
                data-bs-target="#registermodal"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
