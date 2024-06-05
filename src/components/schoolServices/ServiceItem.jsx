import React, { useState } from "react";
import "./services.css";
import { useTransition, animated } from "react-spring";
import "./animation.css";

export const ServiceItem = ({ index, el, isOpen, toggleDescription, name }) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(
    isOpen[name + index]
  );
  const [isLoading, setLoading] = useState(false);

  React.useEffect(() => {
    setDescriptionOpen(isOpen[name + index]);
  }, [isOpen, name, index]);

  const handleDescriptionToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setDescriptionOpen((prev) => !prev);
      setLoading(false);
      toggleDescription(name, index);
    }, 100);
  };

  const transitions = useTransition(isDescriptionOpen, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "auto" },
    leave: { opacity: 0, height: 0 },
    config: { duration: 300 },
  });

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
      {transitions((style, item) =>
        item ? (
          <animated.div className="description-wrap" style={style}>
            <p className="description-subtitle">{el.description}</p>
            {el.age && (
              <p className="description-age">Вікова група: {el.age}</p>
            )}
          </animated.div>
        ) : (
          isLoading && <div className="loader-icon loading-color"></div>
        )
      )}
    </li>
  );
};
