import React from "react";
import image from "../../assets/images/about4.jpg";
import pat1 from "../../assets/icons/partner_in 1.svg";
import pat2 from "../../assets/icons/partner_fu 1.svg";
import pat3 from "../../assets/icons/partner_oki2 1.svg";
import pat4 from "../../assets/icons/partner_ce 1.svg";
import pat5 from "../../assets/icons/partner_ms 1.svg";
import pat6 from "../../assets/icons/partner_hp 1.svg";
import pat7 from "../../assets/icons/partner_af 1.svg";

function Patner2_comp() {
  return (
    <div className="px-5 max-w-[1400px] mx-auto mt-10 mb-20 ">
      <div className="lg:flex flex-row-reverse gap-20">
        <div>
          <img src={image} alt="" className="lg:w-[450px] lg:h-[490px]" />
        </div>
        <div className="lg:w-1/2 mb-16">
          <h1 className="text-xl lg:text-[30px] font-bold lg:leading-[60px] mb-5">
            OUR PARTNERS
          </h1>
          <p className=" lg:text-xl lg:leading-10 text-justify mb-10">
            At BHAKOR CONSULT, we believe that strong partnerships are key to
            delivering the best possible solutions to our customers. As a
            result, we pride ourselves on our strong partnerships with leading
            companies in the ICT and oil and gas industries who share our values
            of innovation, reliability, and customer satisfaction.. Our partners
            enable us to deliver innovative and comprehensive solutions to our
            customers, and we work closely with them to ensure that we are
            always at the forefront of technology.
          </p>
          <div className=" grid grid-cols-2 gap-2  mb-4">
            <img src={pat1} alt="" />
            <img src={pat2} alt="" />
            <img src={pat3} alt="" />
            <img src={pat4} alt="" />
            <img src={pat5} alt="" />
            <img src={pat6} alt="" />
          </div>
          <img src={pat7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Patner2_comp;
