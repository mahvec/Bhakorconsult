import React from "react";
import image from "../../assets/images/about4.jpg";

function AboutTab4() {
  const data = [
    {
      name: "Adopting high standards of ethics in all its business actions and practices",
      id: 0,
    },
    {
      name: "Providing its customers with high quality services, tailor-made to their needs and expectations",
      id: 1,
    },
    { name: "Guaranteeing highly competitive services to its clients", id: 2 },
    {
      name: "Engaging a highly skilled personnel supported by an effective organizational structure",
      id: 3,
    },
    {
      name: "Implementing an ‘equal opportunities’ and ‘environmentally friendly’ policy",
      id: 4,
    },
    { name: "Increasing shareholders’ value.", id: 5 },
  ];
  return (
    <div>
      <div>
        <div className="lg:flex justify-between pb-10">
          <div className="py-16">
            <img
              src={image}
              className="lg:w-[596px] lg:h-[753px]"
              alt="image 1"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-[30px] leading-[60px] font-bold mb-5">
              CORPORATE VALUES
            </p>
            <p className="text-[20px] leading-[40px]">
              BHAKOR CONSULT LTD commits to:
            </p>
            <div>
              {data.map((data, id) => (
                <div key={id} className="flex items-center gap-5 my-2">
                  <p className="w-[10px] h-[10px] bg-[#FF7754] p-2 rounded-full"></p>
                  <p className="leading-8 text-justify">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTab4;
