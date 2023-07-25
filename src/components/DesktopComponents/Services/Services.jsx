import React, { useState } from "react";
import { contentServices } from "./contenServices";
import "../style/services.css";
import { nanoid } from "nanoid";
export const Services = () => {
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
              <li
                onClick={() => toggleDescription("masterClassPottery", index)}
              >
                <div className="services-main-wrap">
                  <p
                    style={{
                      color: isOpen["masterClassPottery" + index] && "#fff",
                    }}
                  >
                    {el.name}
                  </p>
                  <p
                    style={{
                      color: isOpen["masterClassPottery" + index] && "#fff",
                    }}
                  >
                    {el.price}
                  </p>
                </div>
                {isOpen["masterClassPottery" + index] && (
                  <div className="description_wrap">
                    <p className="description-subtitle">{el.description}</p>
                    <p style={{ color: "#BDBDBD" }}>Вікова група: {el.age}</p>
                  </div>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Майстер-клас з живопису</h3>
          {contentServices.masterClassPainting.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <li
                onClick={() => toggleDescription("masterClassPainting", index)}
              >
                <div className="services-main-wrap">
                  <p
                    style={{
                      color: isOpen["masterClassPainting" + index] && "#fff",
                    }}
                  >
                    {el.name}
                  </p>
                  <p
                    style={{
                      color: isOpen["masterClassPainting" + index] && "#fff",
                    }}
                  >
                    {el.price}
                  </p>
                </div>

                {isOpen["masterClassPainting" + index] && (
                  <div className="description_wrap">
                    <p className="description-subtitle">{el.description}</p>
                    <p style={{ color: "#BDBDBD" }}>Вікова група: {el.age}</p>
                  </div>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Заняття для дітей в студії</h3>
          {contentServices.abonimentServices.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <li onClick={() => toggleDescription("aboniment", index)}>
                <div className="services-main-wrap">
                  <p
                    style={{
                      color: isOpen["aboniment" + index] && "#fff",
                    }}
                  >
                    {el.name}
                  </p>
                  <p
                    style={{
                      color: isOpen["aboniment" + index] && "#fff",
                    }}
                  >
                    {el.price}
                  </p>
                </div>
                {isOpen["aboniment" + index] && (
                  <div className="description_wrap">
                    <p className="description-subtitle">{el.description}</p>
                    <p>{el.age}</p>
                  </div>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
        <ul className="price-list">
          <h3 className="subtitle-services">Онлайн заняття</h3>
          {contentServices.onlineServices.map((el, index) => (
            <React.Fragment key={nanoid()}>
              <li onClick={() => toggleDescription("onlineServices", index)}>
                <div className="services-main-wrap">
                  <p
                    style={{
                      color: isOpen["onlineServices" + index] && "#fff",
                    }}
                  >
                    {el.name}
                  </p>
                  <p
                    style={{
                      color: isOpen["onlineServices" + index] && "#fff",
                    }}
                  >
                    {el.price}
                  </p>
                </div>
                {isOpen["onlineServices" + index] && (
                  <div className="description_wrap">
                    <p className="description-subtitle">{el.description}</p>
                  </div>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
