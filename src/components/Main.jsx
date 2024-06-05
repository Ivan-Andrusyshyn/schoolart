import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { CallNow } from "./CollNow/CallNow";

export const Main = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left, #cc8960, #70a871)",
      }}
    >
      <Header />
      <Outlet />
      <CallNow />
    </div>
  );
};
