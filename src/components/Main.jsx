import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { CallNow } from "./DesktopComponents/CollNow/CallNow";
export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CallNow />
    </>
  );
};
