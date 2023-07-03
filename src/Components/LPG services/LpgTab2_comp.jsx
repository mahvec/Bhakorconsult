import React from "react";
import Image1 from "../../assets/images/Rectangle108.jpg";
import logo1 from "../../assets/icons/gas-ter.svg";
import logo2 from "../../assets/icons/total.svg";
import logo3 from "../../assets/icons/adexen.svg";
import logo4 from "../../assets/icons/gasland.svg";
import logo5 from "../../assets/icons/chimons.svg";
import logo6 from "../../assets/icons/techoil.svg";
import logo7 from "../../assets/icons/forte.svg";
import logo8 from "../../assets/icons/Oando.svg";
import logo9 from "../../assets/icons/pipe.svg";
import recharge from "../../assets/icons/Recharge.svg";

function LpgTab2_comp() {
  return (
    <div>
      <div className="mb-[70px]">
        <h1 className="text-[33px] leading-[60px] font-bold mb-[30px]">
          BHAKOR LPG Affiliations
        </h1>
        <img src={Image1} alt="" />
        <div className="flex gap-2 items-center py-2 mt-[30px]">
          <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
          <p className="">
            Membership, NLNG LPG off takers association. Other members include;
          </p>
        </div>

        <div className="lg:grid grid-cols-4 gap-4">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo8} alt="" />
          <img src={logo9} alt="" />
        </div>
      </div>

      <div className="mt-10 mb-[60px]">
        <div className="flex gap-2 items-center py-2 mt-[30px]">
          <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
          <p className="">
            Member Global Alliance for Clean cook stove (2014 till date)
          </p>
        </div>
        <div className="flex gap-2 items-center py-2 mt-[30px]">
          <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
          <p className="flex flex-row items-center">
            <span>Manufactures of the </span>
            <span>
              <img src={recharge} alt="" />
            </span>
            <span>cook stove brand</span>
          </p>
        </div>
        <div className="flex gap-2 items-center py-2 mt-[30px]">
          <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
          <p className="">
            Campaigners for switching from Firewood/kerosene to LPG for domestic
            cooking for all households in Nigeria
          </p>
        </div>
        <div className="flex gap-2 items-center py-2 mt-[30px]">
          <p className="w-[10px] h-[10px] rounded-full p-1 mt-[5px] bg-[#F9A825]"></p>
          <p className="">
            Consultancy and advisory services on LPG powered Generators as
            substitute to Diesel powered Generator.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LpgTab2_comp;
