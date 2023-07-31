import { ContactsSocial } from "./ContactsSocial";
import { FaInstagram, FaTelegram, FaFacebook, FaPhone } from "react-icons/fa";
export const SocailLinksMob = () => (
  <>
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
        href="https://instagram.com/art_in_kheart?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="link-contact"
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
        href="https://t.me/NovytskaHalyna"
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
        href="https://www.facebook.com/halynanovytska"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>
    <div className="contact-item">
      <i className="colored-icon">📞</i>
      <a href="tel:+380676488186">+380-67-64-88-186</a>
    </div>
  </>
);
