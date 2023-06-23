import React from "react";
import image from "../../assets/images/about3.jpg";

function AboutTab3() {
  return (
    <div>
      <div className="">
        <div className="lg:flex justify-between pb-10 gap-10 px-5 ">
          <div className="py-16">
            <img
              src={image}
              className="lg:w-[450px] lg:h-[490px]"
              alt="image 1"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-[30px] leading-[60px] font-bold mb-5">
              QUALITY AND SECURITY
            </p>
            <p className="text-justify lg:text-[20px] leading-8 lg:leading-10">
              BHAKOR CONSULT LTD holds an ISO 9001:2008 certification for ICT
              systems deployment and integration, as well as for software design
              and development. We use advanced methodologies in all our
              activities based on well-known international standards such as
              UML, RUP, CMM, PRINCE2 and ITIL in order to ensure high quality
              services for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTab3;
