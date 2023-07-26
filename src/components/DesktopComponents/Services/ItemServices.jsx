import React, { useState } from "react";
import { Collapse } from "@mui/material";
import "../style/services.css";

export const ItemServices = ({
  index,
  el,
  isOpen,
  toggleDescription,
  name,
}) => {
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
      <Collapse in={isDescriptionOpen} timeout="auto">
        <div className={`description_wrap`}>
          <p className="description-subtitle">{el.description}</p>
          {el.age && <p className="description-age">Вікова група: {el.age}</p>}
        </div>
      </Collapse>
    </li>
  );
};
