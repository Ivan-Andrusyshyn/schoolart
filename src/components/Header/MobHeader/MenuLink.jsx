import { Link } from "react-router-dom";
import "./mobHeader.css";
import "../header.css";

export const MenuLink = ({ item, activeLink }) => {
  return (
    <Link
      to={item.path}
      className="menu-link"
      style={{
        display: "flex",
        textDecoration: "none",
      }}
    >
      {item.icon}
      <p
        className="mob-menu-text"
        style={{
          color: activeLink === item.path ? "#c4da00" : "#fff",
        }}
      >
        {item.text}
      </p>
    </Link>
  );
};
