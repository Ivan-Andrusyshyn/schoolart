import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./contacts.css";
import { MapLocal } from "../../../UI/SocialContacts/MapLocal";
import { SocialLinksMob } from "../../../UI/SocialContacts/SocialLinksMob";

export const Contacts = () => {
  return (
    <div className="contact-page">
      <h2 className="section-title">Контакти</h2>
      <SocialLinksMob />
      <div className="map-iframe-container">
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <h3>Адреса студії</h3>
          <FaMapMarkerAlt
            className="colored-icon"
            size={24}
            style={{ color: "red" }}
          />
        </div>
        <h4 style={{ margin: 0, marginBottom: 20 }}>
          м.Яремче, вул.Свободи, 272а, 3 поверх
        </h4>
        <MapLocal />
      </div>
    </div>
  );
};
