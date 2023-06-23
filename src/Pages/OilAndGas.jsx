import React from "react";
import Navbar from "../Navbar/Navbar";
import OilGasLand from "../Components/Oil&Gas/OilGasLand";
import OilTabView from "../Components/Oil&Gas/OilTabView";
import Footer from "../Components/Footer/Footer";

function OilAndGas() {
  return (
    <div>
      <Navbar />
      <OilGasLand />
      <OilTabView />
      <Footer />
    </div>
  );
}

export default OilAndGas;
