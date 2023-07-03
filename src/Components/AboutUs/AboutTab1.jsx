import React from "react";
import image1 from "../../assets/images/who.jpg";
import image2 from "../../assets/images/about1.jpg";
import { data } from "../../utils/array";

function AboutTab1() {
  return (
    <div>
      <div className="lg:flex flex-row-reverse gap-5 pb-10">
        <div className="lg:w-[50%] py-16">
          <img
            src={image1}
            className=""
            alt="image 1"
          />
        </div>
        <div className="lg:w-[40%]">
          <p className="text-[25px] leading-[40px] font-bold mb-5">
            ABOUT US AT BHAKOR CONSULT
          </p>
          <p className="text-justify lg:text-[20px] leading-8 lg:leading-10">
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
        </div>
      </div>
      <div className="lg:flex gap-5 pb-10">
        <div className="lg:w-1/2">
          <img src={image2} className="lg:w-[500px] lg:h-[753px]" alt="" />
        </div>
        <div>
          <p className="leading-8 text-[#00b140] mb-2 font-medium">
            OUR EXPERTISE
          </p>
          <div className="flex  items-center gap-5 pb-[10px]">
            <p className="text-[25px] leading-10 font-bold ">
              WHAT WE SPECIALIZE IN
            </p>
            <p className="w-[60px] h-[5px] bg-[#00b140]"></p>
          </div>
          <div>
            {data.map((data, id) => (
              <div key={id} className="flex gap-5 items-center py-[5px]">
                <p className="w-[10px] h-[10px] bg-[#FF7754] rounded-full p-1"></p>
                <p className="leading-8">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTab1;
