import React from "react";
import BestOil from "../../assets/images/Group23.jpg";
import graph2 from "../../assets/images/graph2.png";
import { Link } from "react-router-dom";

function Bestoil() {
  return (
    <div className="max-w-[1400px] mx-auto mt-4  mb-20 ">
      <div className="mx-5 lg:flex justify-between items-center">
        <div className="w-full h-auto lg:w-[70%] flex items-center justify-center ">
          <img
            className="h-full w-[320px] md:w-[500px] xl:w-[599px] lg:h-auto "
            src={BestOil}
            alt="Best oil and gas practices"
          />
        </div>
        <div className=" h-auto py-2 lg:w-1/2">
          <h2 className="leading-8 text-[#00b140] text-justify">
            LEARN THE PRO’S BEST SECRET
          </h2>
          <div className="flex flex-col mb-8">
            <div style={{ display: "inline-block" }}>
              <span className=" text-[26px] leading-[50px] font-bold w-full">
                Best Oil and Gas Practices
              </span>
              <span>
                <img className="w-[52px]" src={graph2} alt="" />
              </span>
            </div>
          </div>
          <p className="lg:text-xl leading-8 lg:leading-10 text-justify mb-8">
            BHAKOR CONSULT LIMITED offers a variety of training courses for
            companies. Training programs are conducted for groups ranging from
            field technicians to managers, and are tailored to addressing specific
            concerns. Classes are generally team-taught by Bhakor’s professionals
            with the help of Bhakor's senior technicians.
          </p>
          <div className="flex items-center">
            <Link
              to="/oil-gas"
              className="bg-[#00b140] text-center text-white w-full lg:w-fit  p-[10px] capitalize  lg:text-xl leading-10 rounded-md"
            >
              Find out more about this
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestoil;
