import React from "react";
import { HiOutlineLightBulb } from 'react-icons/hi'
import { AiOutlineTeam, AiOutlineProject } from 'react-icons/ai'

function BhakorCards() {
  return (
    <div className="max-w-[1400px] mx-auto my-8 px-3">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:mx-0">
        <div className="card lg:w-[440px] lg:h-[360px] rounded-md bg-[#CCEFD9] p-5 py-2 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mb-4 gap-4">
            <div className="w-[40px] h-[40px] flex items-center justify-center xl:w-[80px] xl:h-[80px] rounded-full bg-[#00B140]">
              <AiOutlineProject size={35} />
            </div>
            <h1 className="text-lg leading-5 font-bold mb-8 lg:mb-0 p-1">
              BHAKOR ICT STRATEGIES
            </h1>
          </div>
          <p className="leading-8 lg:text-base text-justify lg:text-start">
            Bhakor Consult Ltd. guarantees desired results in Information and
            Communication Technology through a set of rules, behaviours or
            procedures, designed to guide a client's selection of an ICT
            innovation.
          </p>
        </div>
        <div className="card2 lg:w-[440px] lg:h-[360px] border rounded bg-[#FEEED3] p-5  lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mb-4 gap-3">
            <div className="w-[40px] h-[40px] flex items-center justify-center  xl:w-[80px] xl:h-[80px] rounded-full bg-[#F9A825]">
              <HiOutlineLightBulb size={35} />
            </div>
            <h1 className="text-lg leading-5 font-bold mb-8 lg:mb-0 p-1">
              ICT SOLUTION PROCESS
            </h1>
          </div>
          <p className="leading-8 lg:text-base text-justify lg:text-start">
            We define your solution architecture and establish a "solid" plan
            that ensures an innovative solution process, capacity building
            program and upgrade functionalities.
          </p>
        </div>
        <div className="card3 lg:w-[440px] lg:h-[360px] border rounded bg-[#FFDAD0] p-5  lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mb-4 gap-4">
            <div className="w-[40px] h-[40px] flex items-center justify-center xl:w-[80px] xl:h-[80px] rounded-full bg-[#FF7754]">
              <AiOutlineTeam size={35} />
            </div>
            <h1 className="text-lg leading-5 font-bold mb-8 lg:mb-0 p-1">
              OUR TEAM
            </h1>
          </div>
          <p className="leading-8 lg:text-base text-justify lg:text-start">
            Bhakor Consult is a team-oriented management company. We believe in
            putting efforts together to achieve desired goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BhakorCards;
