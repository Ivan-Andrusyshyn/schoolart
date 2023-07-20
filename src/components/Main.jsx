import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { CallNow } from "./UI/CollNow/CallNow";
export const Main = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left, #964b00, #008600)",
      }}
    >
      <Header />
      <Outlet />
      <CallNow />
    </div>
  );
};
