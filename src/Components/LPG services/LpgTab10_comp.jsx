import React, { useState } from "react";
import { keyStatistics2 } from "../../utils/array";

import LpgGas4 from "../../assets/images/lpg1745.jpg";
import Gas from "../../assets/images/gas-flaring1.jpg";
import OilImg1 from "../../assets/images/lpg1174.jpg";
import oilImg2 from "../../assets/images/lpg1746.jpg";

function LpgTab10_comp() {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <div>
      <div className="mt-[60px]">
        <div>
          <h2 className="text-[25px] leading-[50px] font-bold">
            THE GAS FLARING MENACE
          </h2>
          <p className="mt-5 lg:text-[20px] leading-8 lg:leading-[40px] ">
            There is a very sinister irony playing out in the country because as
            we destroy lives and the environment through the use of firewood for
            cooking, the solution to the problem in form of LPG is being wasted
            and flared away in the oil producing Niger Delta. Every month, Oil &
            Gas companies in the Delta flare over 39 billion Standard Cubic Feet
            (SCF) of gas; the equivalence of about $170.166 million (N34.884
            billion).
          </p>
        </div>

        <div className="lg:flex items-center gap-[30px]">
          <img src={LpgGas4} alt="" className="lg:w-[433px] h-auto " />
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] lg:w-1/2">
            Gas flaring is an environmental disaster, contributing immensely to
            climate change (80% of global warming), acid rain, loss of yield of
            agricultural produce, leukemia and other health related challenges.
            The economic loss is also mind boggling as we lose the opportunity
            for job creation and local industry development of the LPG sector.
            The act of gas flaring is a patent waste and the irony of it is at
            once sinister and unbelievable. It is an economic and environmental
            monstrosity that must be addressed, more so when it carries the
            potential to resolve the huge burden of drought and desertification
            plaguing the country. The gas being wasted by flaring can be used
            for power (electricity generation), liquefied petroleum gas (LPG),
            liquefied natural gas (LNG) and petrochemical feedstock.
          </p>
        </div>

        <div>
          <div className="mt-5">
            {keyStatistics2.map((items, id) => (
              <div
                key={items.name}
                className={
                  "bg-white mb-2 lg:py-[5px] lg:px-[10px] border rounded-[10px] overflow-hidden" +
                  (selected == id
                    ? " border-[2px] border-gray-500 overflow-hidden"
                    : "")
                }
              >
                <div
                  className="flex justify-between items-center h-auto p-1 lg:p-3 rounded-[10px] cursor-pointer"
                  onClick={() => toggle(id)}
                >
                  <h1 className="text-[20px] leading-6 font-bold uppercase p-1">
                    {items.name}
                  </h1>
                  <span className="h-[50px] w-[50px] bg-[#F9A825] flex justify-center items-center rounded sm:text-xl font-bold text-white">
                    {selected == id ? "-" : "+"}
                  </span>
                </div>
                <div
                  key={items.name}
                  className={
                    selected == id
                      ? "text-justify text-sm sm:text-[16px] overflow-hidden px-2 sm:px-4 h-auto max-h-[9999px] transition-all duration-700 ease-[cubic-bezier(1,0,1,0)]"
                      : "text-justify text-sm sm:text-[16px] overflow-hidden px-2 sm:px-4  max-h-0 transition-all duration-700 ease-[cubic-bezier(0,1,0,1)]"
                  }
                >
                  {items.content.map((contentItem2) => (
                    <div key={contentItem2.id}>
                      <div className="flex gap-2 items-start py-2">
                        <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
                        <p className="text-justify">{contentItem2.content}</p>
                      </div>
                    </div>
                  ))}
                  <img src={Gas} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex gap-10 mt-[60px]">
          <div className="lg:w-1/2">
            <h1 className="text-[25px] leading-[50px] font-bold mb-5">
              THE LPG SITUATION
            </h1>
            <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
              Domestic LPG is widely considered a very efficient and clean
              energy source for cooking but in Nigeria only about 5% of
              households use LPG as the source of domestic cooking as opposed to
              56% using Firewood and 27% using Kerosene – two unsustainable
              energy sources. Sources of LPG in Nigeria include, the Marginal
              Fields, Refineries, NLNG installations, and operations of the
              IOCs. Most of these are for export purpose but domestic production
              from NLNG and the refineries
            </p>
          </div>
          <div className=" lg:w-1/2">
            <img src={OilImg1} alt="" />
          </div>
        </div>

        <div className="lg:flex gap-10 mt-[60px]">
          <div className="lg:w-1/2">
            <img src={oilImg2} alt="" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[25px] leading-[50px] font-bold">
              THE CURRENT CONSUMPTION
            </h1>
            <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
              In 2013, the NLNG supplied 170,000MT of the LPG domestically,
              while in 2014 it rose by 17.65% to about 200,000MT. The total
              consumption for 2014 was 350,000MT meaning the NLNG supplied
              almost 60% of the domestic consumption. The NLNG has maintained
              that it has the capacity to supply up to 1,000,000MT to the
              domestic market. The challenge lies in stimulating local demand
              and developing an effective mechanism to get the gas to the
              consumers. Nigeria ranks the lowest in the per capita usage of
              Liquefied Petroleum Gas (LPG) below 2kg per capita consumption;
              lagging behind Ghana, South Africa, and Gabon. Morocco not
              reflected on the chart below, consumes 44kg per capita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LpgTab10_comp;
