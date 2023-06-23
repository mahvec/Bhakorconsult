import React from "react";
import Navbar from "../Navbar/Navbar";
import LpgServicesLand from "../Components/LPG services/LpgServicesLand";
import Footer from "../Components/Footer/Footer";
import LpgTabView from "../Components/LPG services/LpgTabView";

function LpgServices() {
  return (
    <div>
      <Navbar />
      <LpgServicesLand />
      <LpgTabView />
      <Footer />
    </div>
  );
}

export default LpgServices;
