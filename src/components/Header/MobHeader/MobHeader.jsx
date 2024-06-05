import { useEffect, useState } from "react";
import "./mobHeader.css";
import React from "react";
import "../header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import "./mobHeader.css";
import logo from "../../../image/photo_2023-07-19_22-26-15.jpg";
import "../header.css";
import { Link } from "react-router-dom";

import { MenuLinks } from "./MenuLinks";

export const MobHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorActual, setColorActual] = useState("#fff");
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setColorActual("#c4da00");
  }, [anchorEl]);

  return (
    <div className="app-container">
      <Typography
        variant="h6"
        component="div"
        style={{ fontSize: 24, color: "#ffffff", display: "flex", gap: 10 }}
      >
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
        </Link>
      </Typography>
      <IconButton
        className="icon-button"
        edge="end"
        aria-label="menu"
        style={{ color: "#fff" }}
        onClick={handleMenuOpen}
      >
        <MenuIcon style={{ fontSize: 34 }} />
      </IconButton>

      <MenuLinks
        colorActual={colorActual}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setColorActual={setColorActual}
      />
    </div>
  );
};
