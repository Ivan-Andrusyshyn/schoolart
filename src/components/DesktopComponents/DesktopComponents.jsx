import { ContactsDesk } from "./ContactsDesk/ContactDesk";
import { Hero } from "./Hero/Hero";
import { AboutStudio } from "./AboutStudio/AboutStudio";
import { Services } from "./Services/Services";
import "./style/Hero.css";
import { CallNow } from "../UI/CollNow/CallNow";
export const DesktopComponents = () => {
  return (
    <div style={{ position: "relative" }}>
      <Hero />
      <Services />
      <AboutStudio />
      <ContactsDesk />
      <CallNow />
    </div>
  );
};
