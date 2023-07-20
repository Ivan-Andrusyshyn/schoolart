import { ContactsDesk } from "./ContactsDesk/ContactDesk";
import { Hero } from "./Hero/Hero";
import { AboutStudio } from "./AboutStudio/AboutStudio";
import "./style/Hero.css";
export const DesktopComponents = () => {
  return (
    <div>
      <Hero />
      <AboutStudio />
      <ContactsDesk />
    </div>
  );
};
