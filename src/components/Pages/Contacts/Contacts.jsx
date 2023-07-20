import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="contact-page">
      <div className="contact-item">
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaInstagram
            className="colored-icon"
            size={28}
            style={{ color: "#FD1D1D", position: "absolute" }}
          />
        </div>
        <a
          href="https://www.instagram.com/your_instagram_account/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="contact-item">
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaTelegram
            className="colored-icon"
            size={26}
            style={{ color: "#0088cc", zIndex: 111, position: "absolute" }}
          />
        </div>
        <a
          href="https://t.me/your_telegram_channel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>

      <div className="contact-item">
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaFacebook
            className="colored-icon"
            size={26}
            style={{
              color: "#1e60f0",
              zIndex: 111,
              position: "absolute",
            }}
          />
        </div>

        <a
          href="https://www.facebook.com/your_facebook_page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>

      <div className="contact-item">
        <i className="colored-icon">📞</i>
        <a href="tel:+1234567890">+1 234 567 890</a>
      </div>
      <div className="map-iframe-container">
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <h3>Наша локація</h3>

          <FaMapMarkerAlt
            className="colored-icon"
            size={24}
            style={{ color: "red" }}
          />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5997787951895!2d-0.13418368442366542!3d51.50947777963666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDM3JzE0LjUiTiAwwrAwMycxMi45Ilc!5e0!3m2!1sen!2suk!4v1560851651455!5m2!1sen!2suk"
          width="360"
          height="250"
          frameBorder="0"
          allowFullScreen=""
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};
