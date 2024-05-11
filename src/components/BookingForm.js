import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    whereTo: "united states",
    numberOfPersons: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    numberOfPersons: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    const numberOfPersons = parseInt(formData.numberOfPersons); // Convert to integer

    if (
      isNaN(numberOfPersons) ||
      numberOfPersons < 1 ||
      numberOfPersons > 100
    ) {
      newFormErrors.numberOfPersons =
        "Please enter a number between 1 and 100.";
      isValid = false;
    }

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const today = new Date();

    if (startDate <= today) {
      newFormErrors.startDate = "Start date should be a future date.";
      isValid = false;
    }

    const maxEndDate = new Date(startDate);
    maxEndDate.setMonth(maxEndDate.getMonth() + 2);

    if (endDate > maxEndDate) {
      newFormErrors.endDate =
        "End date should be within two months from the start date.";
      isValid = false;
    }

    if (!formData.endDate.trim()) {
      newFormErrors.endDate = "End date is required.";
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("booking successful");
      setFormData({
        whereTo: "united states",
        numberOfPersons: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      setFormErrors({
        numberOfPersons: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <div id="book" className="container-fluid p-0">
      <div className="row h-100 no-gutters w-100 p-0">
        <div className="offset-md-6 col-md-4 d-flex align-items-center justify-content-center">
          <div className="card h-70">
            <div className="card-body d-flex flex-column justify-content-between">
              <form id="bookingForm" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label htmlFor="whereTo">Where to:</label>
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      id="whereTo"
                      name="whereTo"
                      // required
                      value={formData.whereTo}
                      onChange={handleInputChange}
                    >
                      <option value="united states">United States</option>
                      <option value="india">India</option>
                      <option value="france">France</option>
                      <option value="germany">Germany</option>
                      <option value="turkey">Turkey</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="numberOfPersons">How Many Person:</label>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfPersons"
                      name="numberOfPersons"
                      min="1"
                      value={formData.numberOfPersons}
                      onChange={handleInputChange}
                      // required
                    />
                    <p id="numberOfPersonsError" className="text-danger">
                      {formErrors.numberOfPersons}
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="startDate">Start Date:</label>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      name="startDate"
                      onChange={handleInputChange}
                      value={formData.startDate}
                      // required
                    />
                    <p id="startDateError" className="text-danger">
                      {formErrors.startDate}
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="endDate">End Date:</label>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      name="endDate"
                      onChange={handleInputChange}
                      value={formData.endDate}
                      // required
                    />
                    <p id="endDateError" className="text-danger">
                      {formErrors.endDate}
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="description">Description:</label>
                  <div>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      placeholder="Enter Your Name And Details"
                      value={formData.description}
                      onChange={handleInputChange}
                      // required
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <div className="mx-auto">
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
