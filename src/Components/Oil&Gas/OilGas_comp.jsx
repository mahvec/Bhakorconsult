import React from "react";
import { oilArray } from "../../utils/array";
import image2 from "../../assets/images/about1.jpg";

function OilGas_comp() {
  return (
    <div className="">
      <div>
        <h2 className="text-[30px] leading-[60px] font-bold mb-5">
          REAL TIME PIPELINE SURVEILANCE
        </h2>
        <p className="text-justify lg:text-xl lg:leading-10 leading-8 mb-5 lg:w-[70%]">
          Pipelines are the safest method for transporting hydrocarbon fluid,
          compared with trucking, rail or marine transportation. Pipeline leaks
          are typically below ground level and not readily visible. The costs of
          the leaks are enormous. Demand is on the rise for accurate and
          reliable monitoring systems for pipelines. Bhakor specializes in
          Real-Time pipeline monitoring using acoustic and other techniques
          which provide unique advantages for pipeline leak detection such as:
        </p>
      </div>
      <div className="lg:flex flex-row-reverse justify-between mt-28">
        <div className="lg:w-1/2">
          <img src={image2} alt="" className="lg:w-[500px] h-auto" />
        </div>
        <div className="lg:w-1/2">
          {oilArray.map((item) => (
            <div key={item.id} className="flex items-center mb-4 gap-5">
              <div className="w-2 h-2 bg-[#FF7754] rounded-full p-2 "></div>
              <div className=" leading-[40px]">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OilGas_comp;
