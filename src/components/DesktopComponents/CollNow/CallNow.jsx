import React from "react";
import { FaPhone } from "react-icons/fa";
import "./callNow.css";
export const CallNow = () => {
  return (
    <a href="tel:+380676488186" className="call-button">
      <FaPhone className="call-icon" />
    </a>
  );
};
