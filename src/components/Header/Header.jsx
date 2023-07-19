import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import "./header.css";
import { MobHeader } from "./MobHeader/MobHeader";
export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className="header-section">
      <Toolbar>
        {isMobile ? (
          <MobHeader setAnchorEl={setAnchorEl} anchorEl={anchorEl ?? null} />
        ) : (
          <div className="nav-menu-desk">
            <Typography
              variant="h6"
              component="div"
              style={{
                fontSize: 24,
                color: "#ffffff",
                display: "flex",
                gap: 10,
              }}
            >
              <span style={{ color: "#ff0000ca" }}>
                <PaletteIcon
                  style={{ fontSize: 32, verticalAlign: "middle" }}
                />
              </span>
              <div>
                <span style={{ color: "#0077ff" }}>Art</span>
                <span style={{ color: "#c4da00" }}> school</span>
              </div>
            </Typography>

            <ul className="list-nav">
              <li className="nav_list_item">
                <p className="list_item_title">Про нас</p>
              </li>
              <li className="nav_list_item">
                <p className="list_item_title">Ціни</p>
              </li>
              <li className="nav_list_item">
                <p className="list_item_title">Контакти</p>
              </li>
            </ul>
          </div>
        )}
      </Toolbar>
    </div>
  );
};
