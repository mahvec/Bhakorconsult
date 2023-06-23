import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Components/Home/Hero";
import WhoAreWe from "../Components/Home/WhoAreWe";
import BhakorCards from "../Components/Home/BhakorCards";
import LpgInfo from "../Components/Home/LpgInfo";
import Bestoil from "../Components/Home/Bestoil";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <BhakorCards />
      <LpgInfo />
      <Bestoil />
      <Footer />
    </div>
  );
}

export default Home;
