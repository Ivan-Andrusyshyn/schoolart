import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import "./header.css";
import { MobHeader } from "./MobHeader/MobHeader";
import logo from "../../image/photo_2023-07-19_22-26-15.jpg";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="header-section">
      <Toolbar className="toolbar">
        {isMobile ? (
          <MobHeader />
        ) : (
          <div className="nav-menu-desk">
            <Typography variant="h6" component="div">
              <div className="logo-container">
                <img src={logo} alt="Logo" />
              </div>
            </Typography>

            <ul className="list-nav">
              <li className="nav_list_item">
                <a href="#about" className="list_item_title">
                  Про студію
                </a>
              </li>
              <li className="nav_list_item">
                <a href="#services" className="list_item_title">
                  Послуги та ціни
                </a>
              </li>
              <li className="nav_list_item">
                <a href="#contacts" className="list_item_title">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        )}
      </Toolbar>
    </div>
  );
};
