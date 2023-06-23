import React, { useState } from "react";
import AboutTabs from "./AboutTabs";
import AboutTab1 from "./AboutTab1";
import AboutTab2 from "./AboutTab2";
import AboutTab3 from "./AboutTab3";
import AboutTab4 from "./AboutTab4";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import AboutTab5 from "./aboutTab5";

function AboutTabView() {
  const [activeTab, setActiveTab] = useState(0);

  const aboutContent1 = <AboutTab1 />;
  const aboutContent2 = <AboutTab2 />;
  const aboutContent3 = <AboutTab3 />;
  const aboutContent4 = <AboutTab4 />;
  const aboutContent5 = <AboutTab5 />;

  const tabs = [
    { id: 0, title: "About Bhakor Consult", content: aboutContent1 },
    { id: 1, title: "Environmental Policy", content: aboutContent2 },
    { id: 2, title: "Quality and Security", content: aboutContent3 },
    { id: 3, title: "Corporate Values", content: aboutContent4 },
    { id: 4, title: "Our Teams", content: aboutContent5 },
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
    <div className="max-w-[1400px] mx-auto lg:flex  pt-10">
      {/* mobile view carousel tab */}
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
                ? "text-[#00b140] text-center font-medium p-1 my-3"
                : "text-[#00b140] text-center font-medium p-1 my-3"
            }`}
            onClick={() => handleTabChange(0)}
          >
            <p className="text-center">{tabs[activeTab].title}</p>
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

      {/* full tab view */}
      <div className="hidden lg:block mx-5 lg:w-[20%]">
        {tabs.map((tab, id) => (
          <div key={id} className="flex items-center my-10">
            <div
              className={`cursor-pointer text-start bg-white font-medium ${
                activeTab === id ? "text-[#00b140] font-semibold " : ""
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
            <AboutTabs contents={tab.content} className="px-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTabView;
