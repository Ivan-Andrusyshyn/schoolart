import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./mobHeader.css";
import "../header.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import "./mobHeader.css";
import "../header.css";
import { FcContacts, FcPanorama, FcPhone } from "react-icons/fc";
export const MenuLinks = ({ colorActual, setAnchorEl, anchorEl }) => {
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [activeLink, setActiveLink] = useState("home");
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/home") {
      setActiveLink("/home");
    } else if (pathname === "/services") {
      setActiveLink("/services");
    } else if (pathname === "/contacts") {
      setActiveLink("/contacts");
    } else if (pathname === "/about") {
      setActiveLink("/about");
    }
  }, [pathname]);
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      className="menu"
    >
      <MenuItem className="menu-item" onClick={handleMenuClose}>
        <Link
          to="home"
          className={`menu-link `}
          style={{
            display: "flex",
            textDecoration: "none",
          }}
        >
          <HomeIcon className="icon-mob-menu" style={{ color: "#4bc413" }} />
          <p
            className="mob-menu-text"
            style={{ color: activeLink === "/home" ? "#c4da00" : "#fff" }}
          >
            Головна
          </p>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item" onClick={handleMenuClose}>
        <Link
          to="contacts"
          className={`menu-link`}
          style={{
            display: "flex",
            textDecoration: "none",
          }}
        >
          <FcContacts className="icon-mob-menu" size={24} />
          <p
            className="mob-menu-text"
            style={{ color: activeLink === "/contacts" ? "#c4da00" : "#fff" }}
          >
            Контакти
          </p>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item" onClick={handleMenuClose}>
        <Link
          to="about"
          className={`menu-link`}
          style={{
            display: "flex",
            textDecoration: "none",
          }}
        >
          <FcPanorama className="icon-mob-menu" size={24} />
          <p
            className="mob-menu-text"
            style={{ color: activeLink === "/about" ? "#c4da00" : "#fff" }}
          >
            Про студію
          </p>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item" onClick={handleMenuClose}>
        <a
          href="tel:+380676488186"
          className="menu-link"
          style={{ display: "flex", textDecoration: "none" }}
        >
          <FcPhone className="icon-mob-menu" size={24} />
          <p className="mob-menu-text">Зателефонувати</p>
        </a>
      </MenuItem>
    </Menu>
  );
};
