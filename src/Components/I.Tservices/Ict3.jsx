import React from "react";
import icon4 from "../../assets/icons/04.svg";
import icon5 from "../../assets/icons/05.svg";
import icon6 from "../../assets/icons/06.svg";

import image4 from "../../assets/images/ict4.jpg";
import image5 from "../../assets/images/ict5.jpg";
import image6 from "../../assets/images/ict6.jpg";

import { rAndD } from "../../utils/array";

function Ict3() {
  return (
    <div className="max-w-[1400px] mx-auto px-5 mb-20">
      <div className="lg:flex flex-row-reverse gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={image4} alt="" className="mb-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon4} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              Integrated Service
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              BHAKOR CONSULT LTD undertakes complex missions on a turn-key basis
              in the fields of IT and telecoms, which involve integrated
              delivery of applications, bundled with all necessary hardware and
              security equipment. To ensure results of a high standard, the
              company follows state-of-the-art methodologies and relies on a
              wide spectrum of qualified and experienced staff as well as on a
              professional industrial environment for assembling, staging,
              testing and dispatching of equipment. This includes a dedicated
              laboratory employing all modern and innovative tools and concepts
              available today in the market.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={image5} alt="" className="mb-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon5} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              Outsourcing - Managed Sources
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              BHAKOR CONSULT LTD undertakes delivery of outsourcing and/or
              managed services for its clients. Such services are offered in
              strict compliance to the most efficient methodologies known today
              in the market (e.g. ITIL) and include support of IT and telecom
              systems and applications in production; 1st, 2nd and 3rd level
              support to users and administrators of specific applications; and
              provision of hosting services.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={image6} alt="" className="mb-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon6} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              Research and Development
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              Current research interests of BHAKOR CONSULT LTD are on the
              following thematic areas:
            </p>
            {rAndD.map((items) => (
              <div key={items.id} className="flex gap-5 items-center mb-5 ">
                <p className=" w-2 h-2 p-2 rounded-full bg-[#FF7754]"></p>
                <p className="leading-8 lg:text-xl lg:leading-10">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ict3;
