import React, { useState } from "react";

const RegisterModal = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNo: "",
    registerEmail: "",
    registerPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNo: "",
    registerEmail: "",
    registerPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateDOB = () => {
    let dob = formData.dateOfBirth;
    let newFormErrors = { ...formErrors };

    let dobDate = new Date(dob);

    let currentDate = new Date();

    let ageDiff = currentDate.getFullYear() - dobDate.getFullYear();

    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      ageDiff--;
    }

    if (ageDiff < 18) {
      newFormErrors.dateOfBirth = "You must be at least 18 years old.";
      return false;
    }

    return true;
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    if (!formData.fullName.trim()) {
      newFormErrors.fullName = "Full name cannot be empty";
      isValid = false;
    }

    if (!formData.gender) {
      newFormErrors.gender = "Please select a gender";
      setFormErrors(newFormErrors);
      return false;
    }

    let contactNoPattern = /^[0-9]{10}$/;
    if (!contactNoPattern.test(formData.contactNo)) {
      newFormErrors.contactNo = "Please enter a valid 10-digit contact number.";
      isValid = false;
    }

    if (!formData.dateOfBirth.trim()) {
      newFormErrors.dateOfBirth = "Date of birth cannot be empty";
      isValid = false;
    } else {
      const isValidDOB = validateDOB(formData.dateOfBirth);
      if (!isValidDOB) {
        newFormErrors.dateOfBirth = "You must be at least 18 years old.";
        isValid = false;
      }
    }

    const emailRegex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailRegex.test(formData.registerEmail)) {
      newFormErrors.registerEmail = "Please enter a valid email address.";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    if (!passwordRegex.test(formData.registerPassword)) {
      newFormErrors.registerPassword =
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
      alert("Form submitted successfully");
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      contactNo: "",
      registerEmail: "",
      registerPassword: "",
    });
    setFormErrors({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      contactNo: "",
      registerEmail: "",
      registerPassword: "",
    });
  };

  return (
    <div className="modal" id="registermodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register form</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            ></button>
          </div>
          <div className="modal-body">
            <form id="registerForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="registerUserName"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  // required
                />
                <p className="text-danger">{formErrors.fullName}</p>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  // required
                />
                <p className="text-danger">{formErrors.dateOfBirth}</p>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  id="gender"
                  aria-label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  // required
                >
                  <option disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <p className="text-danger">{formErrors.gender}</p>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  placeholder="Contact No"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  // required
                />
                <p className="text-danger">{formErrors.contactNo}</p>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  placeholder="Email ID"
                  name="registerEmail"
                  value={formData.registerEmail}
                  onChange={handleInputChange}
                  // required
                />
                <p className="text-danger">{formErrors.registerEmail}</p>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  placeholder="Password"
                  name="registerPassword"
                  value={formData.registerPassword}
                  onChange={handleInputChange}
                  // required
                />
                <p className="text-danger">{formErrors.registerPassword}</p>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p>
                Already have an account?
                <a
                  // href="javascript:void(0)"
                  className="highlighted-link"
                  onClick={() => {}}
                  data-bs-toggle="modal"
                  data-bs-target="#loginmodal"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
