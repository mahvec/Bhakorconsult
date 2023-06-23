import React, { useState } from "react";
import Team1 from "../../assets/images/team1.jpg";
import Team2 from "../../assets/images/team2.jpg";
import Team3 from "../../assets/images/team3.jpg";

function aboutTab5() {
  const data = [
    {
      name: "CHIEF CHAMBERS O. OYIBO",
      position: "Chairman, Bhakor Consult Ltd",
      image: Team1,
      id: 0,
      content:
        " We are open to business partnerships with regards Information Technology and Oil & Gas consulting. We call on you to partner with us today on any new innovation that would require our combine service and timely delivery.",
    },
    {
      name: "EMEKA ONYEOKORO",
      position: "CEO, and Country Director, Bhakor Consult Ltd",
      image: Team2,
      id: 1,
      content:
        " We are open to business partnerships with regards Information Technology and Oil & Gas consulting. We call on you to partner with us today on any new innovation that would require our combine service and timely delivery.",
    },
    {
      name: "DAVID IBHAWOH",
      position: "Director, Bhakor Consult Ltd",
      image: Team3,
      id: 2,
      content:
        " We are open to business partnerships with regards Information Technology and Oil & Gas consulting. We call on you to partner with us today on any new innovation that would require our combine service and timely delivery.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }

    setSelected(id);
  };
  return (
    <div>
      <div className="mb-10">
        <p className="font-bold text-[26px] leading-[50px]">OUR TEAM</p>
        <div className="flex gap-5 flex-col">
          {data.map((item, id) => (
            <div
              key={id}
              className="border rounded border-gray-100 px-5 lg:px-10 lg:pb-10 pb-5 shadow-md"
            >
              <div
                className={
                  "bg-white mb-2  border-t-[16px] pt-10 lg:flex gap-5 border-t-[#F9A825] overflow-hidden " +
                  (selected == id ? "overflow-hidden" : "")
                }
              >
                <div>
                  <img
                    src={item.image}
                    className="lg:w-[236px] lg:h-[236px]"
                    alt=""
                  />
                </div>
                <div
                  className="flex flex-col justify-center "
                  onClick={() => toggle(id)}
                >
                  <p className="font-bold lg:text-[26px] leading-8 lg:leading-[50px]">
                    {item.name}
                  </p>
                  <p className="lg:text-[20px] leading-8 lg:leading-10 mb-3 lg:mb-9">
                    {item.position}
                  </p>
                  <button
                    className={
                      selected == id
                        ? "hidden transition-all duration-700 ease-in-out"
                        : "block w-fit p-2 rounded text-white bg-[#F9A825] transition-all duration-700 ease-in-out"
                    }
                  >
                    Know More
                  </button>
                </div>
              </div>
              <div
                className={
                  selected == id
                    ? "text-justify mt-4 text-sm sm:text-base overflow-hidden px-2 sm:px-4 h-auto max-h-[9999px] transition-all duration-700 ease-[cubic-bezier(1,0,1,0)]"
                    : "text-justify mt-4 text-sm sm:text-base overflow-hidden px-2 sm:px-4  max-h-0 transition-all duration-700 ease-[cubic-bezier(0,1,0,1)]"
                }
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default aboutTab5;
