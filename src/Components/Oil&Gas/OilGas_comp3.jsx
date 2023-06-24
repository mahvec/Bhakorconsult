import React from "react";
import Image1 from "../../assets/images/Rectangle105.jpg";
import Image2 from "../../assets/images/who.jpg";
import { proManagement } from "../../utils/array";
import { oilFlow } from "../../utils/array";

function OilGas_comp3() {
  return (
    <div className="mb-28">
      <div>
        <div>
          <h1 className="text-[30px] leading-[60px] font-bold mb-5">
            PROJECT MANAGEMENT
          </h1>
          <p className="text-justify lg:text-xl lg:leading-10 leading-8  lg:w-[90%]">
            BHAKOR CONSULT LIMITED offers a variety of training courses for
            companies. Training programs are conducted for groups ranging from
            field technicians to managers, and are tailored to addressing
            specific concerns. Classes are generally team-taught by Bhakor’s
            professionals with the help of Bhakor's senior technicians. Special
            guest lecturers from the various flow measurement industries are
            often used to supplement the learning experience. Hands-on labs are
            designed to illustrate the functionality of certain flow concepts
            and principles; observations of actual lab testing provide insight
            and understanding of the daily operation of a flow measurement lab.
          </p>
        </div>
        <div className="my-28 h-auto">
          <div className="relative lg:w-full lg:h-full py-24 z-[20]">
            <img
              src={Image1}
              alt="image 2"
              className="lg:w-[600px]  relative"
            />
            <div className="lg:absolute lg:left-64 top-56 bg-white z-30 p-5  h-auto">
              <div className="bg-gray-300  p-5 ">
                <div>
                  <div className="mb-10">
                    <p className="text-[26px] leading-[50px] font-bold">
                      Measurement Courses
                    </p>
                    <p className="text-[20px] leading-10">
                      Currently, Bhakor Consult offers the following measurement
                      courses:
                    </p>
                  </div>
                  <div>
                    {proManagement.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-5 items-center mb-5 "
                      >
                        <p className=" w-2 h-2 p-2 rounded-full bg-[#FF7754]"></p>
                        <p className=" leading-[30px]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-[#F9A825] h-[580px] w-[500px] absolute left-48 top-[150px] z-[-10]"></div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 p-5">
            <img src={Image2} alt="image 2" className="w-auto xl:h-[430px]" />
          </div>
          <div className="lg:w-1/2 p-5">
            <div className="mb-10">
              <p className="text-[26px] leading-[50px] font-bold">
                Flow Measurement Research
              </p>
              <p className=" leading-5">
                BHAKOR CONSULT also provides consulting services. Our experience
                in flow measurement research and consultancy services include:
              </p>
            </div>
            <div>
              {oilFlow.map((item) => (
                <div key={item.id} className="flex gap-5 items-center mb-5 ">
                  <p className=" w-2 h-2 p-2 rounded-full bg-[#FF7754]"></p>
                  <p className=" leading-[30px]">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OilGas_comp3;
