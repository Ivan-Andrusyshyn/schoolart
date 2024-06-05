import React, { useState } from "react";
import { contentServices } from "./content";
import "./services.css";
import { nanoid } from "nanoid";
import { ServiceItem } from "./ServiceItem";

export const ServiceList = () => {
  const [isOpen, setIsOpen] = useState({});
  const toggleDescription = (serviceType, index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [serviceType + index]: !prevState[serviceType + index],
    }));
  };

  return (
    <div className="services-section" id="services">
      <h2 className="section-title">Послуги та ціни</h2>
      <div className="service-container">
        <ul className="price-list">
          <h3 className="subtitle-services">Майстер-клас з гончарства</h3>

          {contentServices.masterClassPottery.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <ServiceItem
                el={el}
                index={index}
                isOpen={isOpen}
                toggleDescription={toggleDescription}
                name={"masterClassPottery"}
              />
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Майстер-клас з живопису</h3>
          {contentServices.masterClassPainting.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <ServiceItem
                el={el}
                index={index}
                isOpen={isOpen}
                toggleDescription={toggleDescription}
                name={"masterClassPainting"}
              />
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Заняття для дітей в студії</h3>
          {contentServices.abonimentServices.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <ServiceItem
                el={el}
                index={index}
                isOpen={isOpen}
                toggleDescription={toggleDescription}
                name={"aboniment"}
              />
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Онлайн заняття з малювання</h3>
          {contentServices.onlineServices.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <ServiceItem
                el={el}
                index={index}
                isOpen={isOpen}
                toggleDescription={toggleDescription}
                name={"onlineServices"}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
