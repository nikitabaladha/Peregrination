import React, { useState } from "react";

const LoginModal = () => {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    const emailRegex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailRegex.test(formData.loginEmail)) {
      newFormErrors.loginEmail = "Please enter a valid email address.";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    if (!passwordRegex.test(formData.loginPassword)) {
      newFormErrors.loginPassword =
        "Password must contain at least 8 characters, 1 number, 1 lowercase letter, 1 special character, and 1 uppercase letter.";
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("Login successfully");
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setFormData({ loginEmail: "", loginPassword: "" });
    setFormErrors({ loginEmail: "", loginPassword: "" });
  };

  return (
    <div className="modal" id="loginmodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login form</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            ></button>
          </div>
          <div className="modal-body">
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ID"
                  id="email"
                  name="loginEmail"
                  value={formData.loginEmail}
                  onChange={handleInputChange}
                />
                <p id="emailError" className="text-danger">
                  {formErrors.loginEmail}
                </p>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                />
                <p id="passwordError" className="text-danger">
                  {formErrors.loginPassword}
                </p>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                Don't have an account?
                <a
                  href="#"
                  // href="javascript:void(0)"
                  className="highlighted-link"
                  onClick={() => {}}
                  data-bs-toggle="modal"
                  data-bs-target="#registermodal"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
