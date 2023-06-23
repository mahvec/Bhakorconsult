import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import LpgServices from "./Pages/LpgServices";
import IctServices from "./Pages/IctServices";
import OilAndGas from "./Pages/OilAndGas";
import Partnership from "./Pages/Partnership";
import HumanResources from "./Pages/HumanResources";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-bhakor" element={<AboutUs />} />
          <Route path="/lpg" element={<LpgServices />} />
          <Route path="/ict" element={<IctServices />} />
          <Route path="/oil-gas" element={<OilAndGas />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/human-resources" element={<HumanResources />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
