import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Patner1_comp from "../Components/Partner/Patner1_comp";
import Patner2_comp from "../Components/Partner/Patner2_comp";

function Partnership() {
  return (
    <div>
      <Navbar />
      <Patner1_comp />
      <Patner2_comp />
      <Footer />
    </div>
  );
}

export default Partnership;
