import React from "react";
import { Link } from "react-router-dom";

function Patner1_comp() {
  return (
    <div>
      <div className="bg-[url('/src/assets/images/aboutbhakor.jpg')] mt-10 lg:mt-28 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-[590px] ">
        <div className="w-fit lg:w-[640px] lg:h-auto text-black bg-white mx-5 p-3 leading-6 py-10 lg:pl-10 lg:pr-[100px]">
          <p className="font-bold text-2xl mb-5 lg:text-[48px] lg:leading-[70px]">
            Partnership
          </p>
          <p className="lg:text-xl lg:leading-10 leading-8 text-justify mb-5">
            At BHAKOR CONSULT we partner with some of the industry’s finest so
            as to help deliver optimum service and support which exceeds the
            expectations of our clients, and to also help our customers enhance
            productivity. Contact us to learn more
          </p>
          <Link className="bg-[#00b140] text-white text-lg font-medium rounded text-center py-[10px] px-[79px]">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Patner1_comp;
