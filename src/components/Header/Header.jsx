import React from "react";
import AppBar from "@mui/material/AppBar";
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
      <Toolbar
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {isMobile ? (
          <MobHeader />
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
              <div style={{ width: 130, height: 60, display: "flex" }}>
                <img src={logo} alt="" style={{ width: "100%" }} />
              </div>
            </Typography>

            <ul className="list-nav">
              <li className="nav_list_item">
                <p className="list_item_title">Про студію</p>
              </li>
              <li className="nav_list_item">
                <p className="list_item_title"> Послуги та ціни</p>
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
