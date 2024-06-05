import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./mobHeader.css";
import "../header.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { FcContacts, FcPanorama, FcPhone } from "react-icons/fc";
import { MenuLink } from "./MenuLink";

const menuItems = [
  {
    path: "/home",
    icon: <HomeIcon className="icon-mob-menu" style={{ color: "#4bc413" }} />,
    text: "Головна",
  },
  {
    path: "/contacts",
    icon: <FcContacts className="icon-mob-menu" size={24} />,
    text: "Контакти",
  },
  {
    path: "/about",
    icon: <FcPanorama className="icon-mob-menu" size={24} />,
    text: "Про студію",
  },
  {
    path: "tel:+380676488186",
    icon: <FcPhone className="icon-mob-menu" size={24} />,
    text: "Зателефонувати",
    isExternal: true,
  },
];

export const MenuLinks = ({ setAnchorEl, anchorEl }) => {
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [activeLink, setActiveLink] = useState("/home");

  const { pathname } = useLocation();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      className="menu"
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} className="menu-item" onClick={handleMenuClose}>
          {item.isExternal ? (
            <a
              href={item.path}
              className="menu-link"
              style={{ display: "flex", textDecoration: "none" }}
            >
              {item.icon}
              <p className="mob-menu-text">{item.text}</p>
            </a>
          ) : (
            <MenuLink item={item} activeLink={activeLink} />
          )}
        </MenuItem>
      ))}
    </Menu>
  );
};
