import React, { useState } from "react";
import LpgGas1 from "../../assets/images/lpg111.jpg";
import LpgGas2 from "../../assets/images/lpg112.jpg";
import LpgGas3 from "../../assets/images/lpg113.jpg";
import LpgGas4 from "../../assets/images/lpg1745.jpg";
import Gas from "../../assets/images/gas-flaring1.jpg";
import OilImg1 from "../../assets/images/lpg1174.jpg";
import oilImg2 from "../../assets/images/lpg1746.jpg";
import oilImg3 from "../../assets/images/demand.jpg";
import oilImg4 from "../../assets/images/lpg117.jpg";

import {
  keyStatistics1,
  keyStatistics2,
  demand,
  logistics,
  finance,
} from "../../utils/array";
import { data } from "autoprefixer";

import ImageCarousel from "../../utils/ImageCarousel";
import LpgTab10_comp from "./LpgTab10_comp";

function LpgTab1_comp() {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  const images = [LpgGas1, LpgGas2, LpgGas3];

  return (
    <div>
      <div className="">
        <div>
          <h1 className="text-[33px] leading-[60px] font-bold mb-[30px]">
            BHAKOR RECHARGE GAS COOKING STOVE
          </h1>

          <div className="lg:hidden">
            <ImageCarousel images={images} />
          </div>

          <div className="hidden lg:flex gap-5">
            <img src={LpgGas1} className="w-[330px] h-[300px]" alt="image 1" />
            <img src={LpgGas2} className="w-[330px] h-[300px]" alt="image 2" />
            <img src={LpgGas3} className="w-[330px] h-[300px]" alt="image 3" />
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[25px] leading[50px] font-bold">
            THE FIREWOOD MENACE
          </p>
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
            Over 120 million Nigerians face serious health risks through
            exposure to smoke from cooking with firewood and other solid fuels.
            The health risks associated with cooking with firewood and other
            solid fuels such as charcoal, sawdust and agricultural residues are
            numerous including pneumonia, cardiovascular diseases, chronic lung
            disease and lung cancer to mention a few. There are also huge
            environmental consequence of cutting down trees for firewood. The
            local and global environment become degraded, as the demand for
            biomass encourages deforestation, the use of animal waste degrades
            soil quality and, to the extent that it is used unsustainably,
            burning biomass contributes to global warming. In Nigeria, 19
            northern states are plagued with desertification due to consistent
            cutting down of trees for firewood.
          </p>
          <div>
            <div className="mt-5">
              {keyStatistics1.map((statistics, id) => (
                <div
                  key={statistics.id}
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
                      {statistics.name}
                    </h1>
                    <span className="h-[50px] w-[50px] bg-[#F9A825] flex justify-center items-center rounded sm:text-xl font-bold text-white">
                      {selected == id ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={
                      selected == id
                        ? "text-justify text-sm sm:text-[16px] overflow-hidden px-2 sm:px-4 h-auto max-h-[9999px] transition-all duration-700 ease-[cubic-bezier(1,0,1,0)]"
                        : "text-justify text-sm sm:text-[16px] overflow-hidden px-2 sm:px-4  max-h-0 transition-all duration-700 ease-[cubic-bezier(0,1,0,1)]"
                    }
                  >
                    {statistics.contents.map((contentItem) => (
                      <div
                        key={contentItem.id}
                        className="flex gap-2 items-start py-2"
                      >
                        <p className="w-[10px] h-[10px] rounded-full p-1 mt-2 bg-[#F9A825]"></p>
                        <p className="text-justify">{contentItem.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LpgTab10_comp />

        <div>
          <div className="mt-[60px]">
            <h1 className="text-[25px] leading-[50px] font-bold">
              PROJECTED DEMANDS CAPACITY
            </h1>
            <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
              The current LPG penetration in Nigeria stands at about 5%. The
              WLPGA estimates that over a five year period LPG adoption in
              Nigeria should grow to between 20 and 50% if the government helps
              to drive the adoption process with an annual consumption of
              800,000MT–2,600,000MT. To achieve this level of demand a
              well-articulated plan needs to be developed and implemented.
            </p>
            <img src={oilImg3} alt="" className="" />
          </div>

          <div className="lg:flex gap-10 mt-[60px]">
            <p className="lg:w-1/2 lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
              The NLNG posits that the country does not have a production
              problem, with a reserve of about 187 trillion SCF of Natural gas
              and producing an average of 3 - 4 million MT of LPG per annum. The
              supply constraint is mainly one of infrastructure and logistics
              constraints to take the gas to the end users. The absence of
              functional cylinder manufacturing plants, inadequate storage, poor
              transportation network and infrastructure, as well as limited
              jetty availability and low-priority berthing accorded to Liquefied
              Petroleum Gas (LPG) vessels constitute the major challenges facing
              the industry.
            </p>
            <img src={oilImg4} alt="" className="lg:w-[470px] lg:h-[430px]" />
          </div>

          <div className="my-[60px]">
            <h1 className="text-[25px] leading-[50px] font-bold">
              WHY DON’T MORE HOMES IN NIGERIA SWITCH TO LPG?
            </h1>
            <div className="lg:flex justify-between ">
              <div>
                <div className="mt-5">
                  <h1 className="text-xl leading-6 p-1 font-bold">Demand</h1>
                  {demand.map((content) => (
                    <div
                      key={content.id}
                      className="flex gap-2 items-start py-2"
                    >
                      <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
                      <p>{content.name}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <h1 className="text-xl leading-6 p-1 font-bold">Finance</h1>
                  {finance.map((data) => (
                    <div key={data.id} className="flex gap-2 items-start py-2">
                      <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
                      <p>{data.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <div className="mr-20">
                  <h1 className="text-xl leading-6 p-1 font-bold">Logistics</h1>
                  {logistics.map((item) => (
                    <div key={item.id} className="flex gap-2 items-start py-2">
                      <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LpgTab1_comp;
