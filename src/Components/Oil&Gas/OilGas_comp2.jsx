import React from "react";
import Image1 from "../../assets/images/Rectangle10.jpg";
import Image2 from "../../assets/images/Rectangle104.jpg";
import icon1 from "../../assets/icons/01.svg";
import icon2 from "../../assets/icons/02.svg";
import { oilCivil, oilMechanical } from "../../utils/array";

function OilGas_comp2() {
  return (
    <div>
      <div>
        <h1 className="text-[30px] leading-[60px] font-bold mb-5">
          ENGINEERING DESIGN
        </h1>
        <p className="text-justify lg:text-xl lg:leading-10 leading-8  lg:w-[70%]">
          BHAKOR CONSULT LIMITED maintains full time staff of experienced
          structural, mechanical, process, electrical and instrumentation
          engineers. From designing a simple system to complex oil and gas
          treating facilities, our team is here to support your project.
          Examples of the detailed engineering services BHAKOR is prepared to
          provide include:
        </p>
      </div>
      <div className="lg:flex gap-5 mt-28">
        <div>
          <img src={Image2} alt="" className="lg:w-[453px] h-auto" />
        </div>
        <div>
          <div className="flex gap-5 items-center mt-5 mb-10">
            <img src={icon1} alt="01" className="w-[50px] h-auto" />
            <h1 className="text-[26px] leading-[50px] font-bold ">
              CIVIL / STRUCTURAL
            </h1>
          </div>
          <div>
            {oilCivil.map((item) => (
              <div key={item.id} className="flex gap-5 items-center mb-5 ">
                <p className=" w-2 h-2 p-2 rounded-full bg-[#FF7754]"></p>
                <p className=" leading-[30px]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse gap-5 my-20">
        <div className="lg:w-1/2">
          <img src={Image1} alt="" className="lg:h-[678px] w-auto " />
        </div>
        <div className="lg:w-1/2">
          <div className="flex gap-5 items-center mt-5 mb-10">
            <img src={icon2} alt="02" className="w-[50px] h-auto" />
            <h1 className="text-[26px] leading-[50px] font-bold ">
              MECHANICAL
            </h1>
          </div>
          <div>
            {oilMechanical.map((item) => (
              <div key={item.id} className="flex gap-5 items-center mb-5 ">
                <p className=" w-2 h-2 p-2 rounded-full bg-[#FF7754]"></p>
                <p className=" leading-[30px]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OilGas_comp2;
