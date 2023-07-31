import React from "react";
import "../style/contactDesk.css";
import { MapLocal } from "../../../UI/SocialContacts/MapLocal";
import { SocailLinks } from "../../../UI/SocialContacts/SocailLinks ";
export const ContactsDesk = () => {
  return (
    <div id="contacts" className="contacts-section">
      <div className="contact-wrapper">
        <h2 className="section-title">Контакти</h2>
        <SocailLinks />
        <address>
          <div className="contact-item" style={{ display: "flex" }}>
            <i className="contact-icon">📍</i>

            <h3 style={{ color: "#fff", textAlign: "center" }}>
              Адреса студії: м.Яремче, вул.Свободи, 272а, 3 поверх
            </h3>
          </div>
          <div className="contact-map">
            <MapLocal />
          </div>
        </address>
      </div>
    </div>
  );
};
