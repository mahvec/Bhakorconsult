import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutBhakor from "../Components/AboutUs/AboutBhakor";
import AboutTabView from "../Components/AboutUs/AboutTabView";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <AboutBhakor />
      <AboutTabView />
      <Footer />
    </div>
  );
}

export default AboutUs;
