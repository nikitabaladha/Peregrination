import React from "react";
import LoginModal from "../components/LoginModal.js";
import RegisterModal from "../components/RegisterModal";

const ModalContainer = () => {
  return (
    <div>
      <RegisterModal />
      <LoginModal />
    </div>
  );
};

export default ModalContainer;
