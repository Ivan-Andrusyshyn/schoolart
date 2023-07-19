import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { DesktopComponents } from "./DesktopComponents/DesktopComponents";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
