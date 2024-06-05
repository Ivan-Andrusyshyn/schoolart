import { ContactsDesk } from "./ContactsDesk/ContactDesk";
import { Hero } from "./Hero/Hero";
import { ServiceList } from "../../schoolServices/ServiceList";
import "./styles/Hero.css";
import { CallNow } from "../../CollNow/CallNow";
import { AboutStudio } from "./AboutStudio/AboutStudio";

export const DesktopComponents = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Hero />
      <ServiceList />
      <AboutStudio />
      <ContactsDesk />
      <CallNow />
    </div>
  );
};
