import { useState } from "react";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import "./mobHeader.css";
import "../header.css";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PaletteIcon from "@mui/icons-material/Palette";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import "./mobHeader.css";
import "../header.css";
export const MobHeader = ({ setAnchorEl, anchorEl }) => {
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="app-container">
      <Typography
        variant="h6"
        component="div"
        style={{ fontSize: 20, color: "#ffffff", display: "flex", gap: 10 }}
      >
        <span style={{ color: "#ff0000ca" }}>
          <PaletteIcon style={{ fontSize: 30, verticalAlign: "middle" }} />
        </span>
        <div>
          <span style={{ color: "#0077ff" }}>Art</span>
          <span style={{ color: "#c4da00" }}> school</span>
        </div>
      </Typography>
      <IconButton
        className="icon-button"
        edge="end"
        aria-label="menu"
        style={{ color: "#fff" }}
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className="menu"
        style={{ padding: 0 }}
      >
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <Link to="home" className="menu-link" style={{ display: "flex" }}>
            <HomeIcon className="icon-mob-menu" />
            <p className="mob-menu-text">Головна</p>
          </Link>
        </MenuItem>

        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <Link to="services" className="menu-link" style={{ display: "flex" }}>
            <MonetizationOnIcon className="icon-mob-menu" />
            <p className="mob-menu-text">Послуги та ціни</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <Link to="contacts" className="menu-link" style={{ display: "flex" }}>
            <ContactPhoneIcon className="icon-mob-menu" />
            <p className="mob-menu-text">Контакти</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <Link to="about" className="menu-link" style={{ display: "flex" }}>
            <InfoIcon className="icon-mob-menu" />
            <p className="mob-menu-text">Про нас</p>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
