import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Services } from "./components/Pages/Services/Services";
import { Contacts } from "./components/Pages/Contacts/Contacts";
import { About } from "./components/Pages/About/About";
import { Main } from "./components/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
