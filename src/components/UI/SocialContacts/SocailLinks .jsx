import React from "react";
import { ContactsSocial } from "./ContactsSocial";
import { FaInstagram, FaTelegram, FaFacebook, FaPhone } from "react-icons/fa";
export const SocailLinks = () => {
  return (
    <>
      <div className="contact-item">
        <div
          style={{
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
            borderRadius: "25%",
            position: "relative",
          }}
        >
          <FaInstagram
            className="contact-icon"
            size={35}
            style={{
              color: "#ffffff75",
              left: -2,
              position: "absolute",
            }}
          />
        </div>
        <a
          className="link-contact-desk"
          href="https://instagram.com/art_in_kheart?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="contact-item">
        <ContactsSocial>
          <FaTelegram
            className="contact-icon"
            size={35}
            style={{
              color: "#0088cc",
              left: -1,
              zIndex: 111,
              position: "absolute",
            }}
          />
        </ContactsSocial>
        <a
          className="link-contact-desk"
          href="https://t.me/NovytskaHalyna"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
      <div className="contact-item">
        <ContactsSocial>
          <FaFacebook
            className="contact-icon"
            style={{
              color: "#1e60f0",
              zIndex: 111,
              position: "absolute",
              left: -1,
            }}
            size={34}
          />
        </ContactsSocial>
        <a
          className="link-contact-desk"
          href="https://www.facebook.com/halynanovytska"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div className="contact-item">
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <FaPhone
            className="contact-icon"
            size={27}
            style={{ color: "#0ec099", left: -1, position: "absolute" }}
          />
        </div>
        <a href="tel:+380676488186">+380-67-64-88-186</a>
      </div>
    </>
  );
};
