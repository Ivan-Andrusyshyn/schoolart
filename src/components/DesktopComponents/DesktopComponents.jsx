import { ContactsDesk } from "./ContactsDesk/ContactDesk";
import { Hero } from "./Hero/Hero";
import { Services } from "./Services/Services";
import "./style/Hero.css";
import { CallNow } from "../UI/CollNow/CallNow";
import { AboutStudio } from "./AboutStudio/AboutStudio";
export const DesktopComponents = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Hero />
      <Services />
      <AboutStudio />
      <ContactsDesk />
      <CallNow />
    </div>
  );
};
