import React from "react";
import Who from "../../assets/images/who.jpg";
import { Link } from "react-router-dom";

function WhoAreWe() {
  return (
    <div className="max-w-[1400px] mx-auto mt-4 ">
      <div className="flex flex-col lg:flex-row px-3 lg:justify-between items-center lg:p-16 lg:gap-2">
        <div className="lg:w-1/2 my-2">
          <img
            src={Who}
            alt="Who-are-we.jpg"
            className="sm:w-auto sm:h-[566px] "
          />
        </div>
        <div className="lg:w-1/2 p-1">
          <h3 className="text-[#00B140] text-base leading-8 my-2">
            WHO ARE WE?
          </h3>
          <h1 className="text-[#151518] text-[33px] lg:text-3xl leading-[60px] font-bold mb-4 p-1">
            BHAKOR CONSULT LIMITED
          </h1>
          <p className="mb-4 leading-8 lg:w-[90%] text-justify p-1">
            BHAKOR CONSULT LIMITED is an innovative Information and
            Communication Technologies (ICT) service provider, Energy and
            Consultancy Services company. We design, develop, support and
            promote software ICT applications, instrumentation and pipeline
            surveillance and maintenance, high end IT infrastructure solution
            design and deployment using state-of-the-art technology. The ethos
            of our company is to deliver the optimum service and support which
            exceeds the expectations of our clients, help our customers enhance
            productivity, increase business agility, and improve customer
            loyalty, thereby maximizing our revenue.
          </p>
          <div className="flex lg:flex-none items-center justify-center w-full lg:w-fit">
            <Link
              to="/about-bhakor"
              className="bg-[#00B140] w-full lg:w-[240px] text-center p-4 text-white rounded-md font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
