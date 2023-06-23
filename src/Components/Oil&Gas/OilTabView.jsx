import React, { useState } from "react";
import OilTabs from "./OilTabs";
import OilGas_comp from "./OilGas_comp";
import OilGas_comp2 from "./OilGas_comp2";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import OilGas_comp3 from "./OilGas_comp3";

function OilTabView() {
  const [activeTab, setActiveTab] = useState(0);

  const OilComp1 = <OilGas_comp />;
  const OilComp2 = <OilGas_comp2 />;
  const OilComp3 = <OilGas_comp3 />;

  const tabs = [
    {
      id: 0,
      title: "Real Time Pipeline Surveilance",
      content: OilComp1,
    },
    { id: 1, title: "Engineering Design", content: OilComp2 },
    { id: 2, title: "Project Management", content: OilComp3 },

    {
      id: 3,
      title: "Software Customization",
      content: "",
    },
    {
      id: 4,
      title: "Instrumentation & Control",
      content: "",
    },

    {
      id: 5,
      title: "Industrial Control & Automation",
      content: "",
    },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const handlePrevTab = () => {
    setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : 0));
  };

  const handleNextTab = () => {
    setActiveTab((prevTab) =>
      prevTab < tabs.length - 1 ? prevTab + 1 : tabs.length - 1
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto lg:flex pt-10">
      <div className="flex justify-evenly lg:hidden items-center">
        {activeTab > 0 && (
          <div className="cursor-pointer mr-4" onClick={handlePrevTab}>
            <p className="text-[#00b140]">
              <VscArrowSmallLeft size={20} />
            </p>
          </div>
        )}

        <div className="overflow-x-auto">
          <div
            className={`cursor-pointer ${
              activeTab === 0
                ? "text-[#00b140] font-medium p-1 text-center my-3"
                : "text-[#00b140] font-medium p-1 text-center my-3"
            }`}
            onClick={() => handleTabChange(0)}
          >
            {tabs[activeTab].title}
          </div>
        </div>

        {activeTab < tabs.length - 1 && (
          <div className="cursor-pointer ml-4" onClick={handleNextTab}>
            <p className="text-[#00b140]">
              <VscArrowSmallRight size={20} />
            </p>
          </div>
        )}
      </div>
      <div className="hidden lg:block mx-5 lg:w-[20%]">
        {tabs.map((tab, id) => (
          <div key={tab.id} className="flex items-cemter my-10">
            <div
              className={`cursor-pointer bg-white ${
                activeTab === id ? "text-[#00b140] font-medium" : ""
              }`}
              onClick={() => handleTabChange(id)}
            >
              {tab.title}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[10px] p-[10px] lg:w-[80%]">
        {tabs.map((tab, id) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === id ? "active" : ""}`}
          >
            <OilTabs contents={tab.content} className="px-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OilTabView;
