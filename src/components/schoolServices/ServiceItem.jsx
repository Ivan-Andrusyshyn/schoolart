import React, { useState } from "react";
import "./services.css";

export const ServiceItem = ({ index, el, isOpen, toggleDescription, name }) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(
    isOpen[name + index]
  );

  React.useEffect(() => {
    setDescriptionOpen(isOpen[name + index]);
  }, [isOpen, name, index]);

  const handleDescriptionToggle = () => {
    setDescriptionOpen((prev) => !prev);
    toggleDescription(name, index);
  };

  return (
    <li className={`content`} onClick={handleDescriptionToggle}>
      <div className="services-main-wrap">
        <p
          style={{
            color: !isDescriptionOpen ? "inherit" : "#fff",
            textDecoration: !isDescriptionOpen ? "underline" : "none",
          }}
        >
          {el.name}
        </p>
        <p style={{ color: isDescriptionOpen ? "#fff" : "inherit" }}>
          {el.price}
        </p>
      </div>
      {isDescriptionOpen && (
        <div className="description-wrap">
          <p className="description-subtitle">{el.description}</p>
          {el.age && <p className="description-age">Вікова група: {el.age}</p>}
        </div>
      )}
    </li>
  );
};
