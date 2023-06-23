import React, { useState } from "react";
import { AccordionData } from "../Items/AccordionItems";
import LpgBg from "../../assets/Images/Lpg.jpg";
import { Link } from "react-router-dom";

function LpgInfo() {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div className="">
      <div className=" relative max-w-[1440px] mx-auto py-20 flex flex-col lg:flex-row-reverse justify-between items-center ">
        <div className="relative lg:w-[55%] w-full h-[550px] lg:h-[700px]">
          <div className="relative hidden lg:block lg:pl-16 h-auto lg:h-[700px]">
            <img
              src={LpgBg}
              alt="Lpg-pic"
              className="h-[500px] w-full xs:hidden lg:block z-[-10]"
            />
          </div>
          <div className="lg:absolute lg:left-0 lg:top-16 h-auto bg-[#F6F6F6] lg:w-[60%] px-2 py-7 lg:p-[35px] rounded-md mx-2 mb-5 lg:mb-0">
            <p className="sm:text-[20px] lg:text-[20px] font-bold leading-[120%] mb-5 py-3 ">
              LPG DISTRIBUTION SERVICES
            </p>
            <p className="sm:text-[20px] h-auto leading-7 xl:leading-[40px] text-justify mb-8">
              Bhakor is a major distributor of LPG products in Nigeria and duly
              registered to sell LPG across the nation and beyond. Bhakor has in
              its kitty, fleets of Bridger trucks for bulk delivery to all parts
              of the country for both commercial and industrial applications and
              also operates a fleet of tricycles for door to door gas
              distribution to meet the daily demands of domestic end users
              within the country.
            </p>
            <div className="flex lg:flex-none items-center justify-center w-full lg:w-fit">
              <Link
                to="/lpg"
                className="w-full lg:w-fit text-center p-4 font-semibold bg-[#00B140] px-10 py-3 rounded text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-auto md:h-[400px] lg:h-full lg:mb-28">
          <div className="relative px-3 lg:px-10">
            {AccordionData.map((item, id) => (
              <div
                className={
                  "bg-white mb-2 lg:py-[5px] lg:px-[10px] border rounded-[10px] overflow-hidden" +
                  (selected == id
                    ? " border-[2px] border-gray-500 overflow-hidden"
                    : "")
                }
                key={id}
              >
                <div
                  className="flex justify-between items-center h-auto p-1 lg:p-3 rounded-[10px] cursor-pointer"
                  onClick={() => toggle(id)}
                >
                  <h1 className="text-sm sm:text-[20px] sm:leading-[120%] p-1 lg:py-2 font-bold ">
                    {item.name}
                  </h1>
                  <span className="h-[50px] w-[50px] bg-[#F9A825] flex justify-center items-center rounded sm:text-xl font-bold text-white">
                    {selected == id ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={
                    selected == id
                      ? "text-justify text-sm sm:text-base overflow-hidden px-2 sm:px-4 h-auto max-h-[9999px] transition-all duration-700 ease-[cubic-bezier(1,0,1,0)]"
                      : "text-justify text-sm sm:text-base overflow-hidden px-2 sm:px-4  max-h-0 transition-all duration-700 ease-[cubic-bezier(0,1,0,1)]"
                  }
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-4 lg:mx-16 mt-5 bg-[#feeed3b8] p-5 rounded-lg">
            <p className=" sm:text-xl font-bold">PARTNER WITH US</p>
            <p className="text-sm sm:text-base text-justify">
              We are open to business partnerships with regards Information
              Technology and Oil & Gas consulting. We call on you to partner
              with us today on any new innovation that would require our combine
              service and timely delivery.
            </p>
            <p>-- Bhakor Consult</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LpgInfo;
