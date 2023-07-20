import React from "react";
import { FaInstagram, FaTelegram, FaFacebook, FaPhone } from "react-icons/fa";
import "./contactDesk.css";
import { ContactsSocial } from "../../UI/ContactsSocial";
export const ContactsDesk = () => {
  return (
    <div id="contacts" className="contacts-section">
      <h2 className="section-title">Контакти</h2>
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
          <FaInstagram
            className="contact-icon"
            size={35}
            style={{ color: "#d13b00", left: -1, position: "absolute" }}
          />
        </div>
        <a
          className="link-contact-desk"
          href="https://www.instagram.com/your_instagram_account/"
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
          href="https://t.me/your_telegram_channel/"
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
          href="https://www.facebook.com/your_facebook_page/"
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

        <a href="tel:+1234567890">+1 234 567 890</a>
      </div>
      <div className="contact-item" style={{ display: "flex" }}>
        <i className="contact-icon">📍</i>
        <h3 style={{ color: "#fff", textAlign: "center" }}>Наша локація</h3>
      </div>
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651046.3215191709!2d29.87334771965169!3d50.401047772151514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1689857920259!5m2!1suk!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
