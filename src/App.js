import "./App.css";
import { Home } from "./components/Pages/Home/Home";
import { Contacts } from "./components/Pages/Contacts/Contacts";
import { About } from "./components/Pages/About/About";
import { Main } from "./components/Main";
import { DesktopComponents } from "./components/DesktopComponents/DesktopComponents";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {isMobile ? (
          <>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
          </>
        ) : (
          <Route path="/" element={<DesktopComponents />} />
        )}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
