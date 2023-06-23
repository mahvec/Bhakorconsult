import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Hr1 from "../Components/HumanResource/Hr1";
import Hr2 from "../Components/HumanResource/Hr2";

function HumanResources() {
  return (
    <div>
      <Navbar />
      <Hr1 />
      <Hr2 />
      <Footer />
    </div>
  );
}

export default HumanResources;
