import React, { useState } from "react";
import LpgTabs from "./LpgTabs";
import LpgTab1_comp from "./LpgTab1_comp";
import LpgTab2_comp from "./LpgTab2_comp";
import LpgTab_comp from "./LpgTab_comp";
import LpgTab3_comp from "./LpgTab3_comp";
import LpgTab4_comp from "./LpgTab4_comp";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";

function LpgTabView() {
  const [activeTab, setActiveTab] = useState(0);

  const tab1 = <LpgTab_comp />;
  const tab2 = <LpgTab1_comp />;
  const tab3 = <LpgTab2_comp />;
  const tab4 = <LpgTab3_comp />;
  const tab5 = <LpgTab4_comp />;

  const tabs = [
    {
      id: 0,
      title: "LPG Distribution Services",
      content: tab1,
    },
    {
      id: 1,
      title: "Bhakor Recharge Gas Cooking Stove",
      content: tab2,
    },
    {
      id: 2,
      title: "Bhakor LPG Affiliations",
      content: tab3,
    },
    {
      id: 3,
      title: "Bhakor LPG Supply & Distribution",
      content: tab4,
    },
    {
      id: 4,
      title: "LPG Generators and Accessories",
      content: tab5,
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
    <div>
      <div className="max-w-[1400px] mx-auto  lg:flex">
        <div className="flex justify-between lg:hidden items-center px-5">
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
            <div key={tab.id} className="flex items-center my-10">
              <div
                className={`cursor-pointer bg-white  ${
                  activeTab === id ? "text-[#00b140] font-medium " : ""
                }`}
                onClick={() => handleTabChange(id)}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[10px] p-[10px] lg:w-[80%]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-pane ${activeTab === index ? "active" : ""}`}
            >
              <LpgTabs contents={tab.content} className="px-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LpgTabView;
