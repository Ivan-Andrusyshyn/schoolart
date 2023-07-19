import { useEffect, useState } from "react";
import "./mobHeader.css";
import React from "react";
import "../header.css";
import MenuIcon from "@mui/icons-material/Menu";
import PaletteIcon from "@mui/icons-material/Palette";
import Typography from "@mui/material/Typography";
import { Icon, IconButton } from "@mui/material";
import "./mobHeader.css";
import "../header.css";
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
        <span style={{ color: "#ff0000ca" }}>
          <PaletteIcon style={{ fontSize: 30, verticalAlign: "middle" }} />
        </span>
        <div>
          <span style={{ color: "#0077ff" }} className="mob-title-header">
            Art
          </span>
          <span style={{ color: "#c4da00" }} className="mob-title-header">
            school
          </span>
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

      <MenuLinks
        colorActual={colorActual}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setColorActual={setColorActual}
      />
    </div>
  );
};
