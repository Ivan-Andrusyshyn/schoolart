import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./contacts.css";
import { MapLocal } from "../../../SocialContacts/MapLocal";
import { SocialLinksMob } from "../../../SocialContacts/SocialLinksMob";

export const Contacts = () => {
  const mapUrl =
    "https://www.google.com.ua/maps/search/++%D0%BC.%D0%AF%D1%80%D0%B5%D0%BC%D1%87%D0%B5,+%D0%B2%D1%83%D0%BB.%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8,+272%D0%B0,+3+%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85/@48.4345335,24.5458566,16.25z?entry=ttu";
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
        <address>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="address-title"
          >
            м.Яремче, вул.Свободи, 272а, 3 поверх
          </a>

          <MapLocal />
        </address>
      </div>
    </div>
  );
};
