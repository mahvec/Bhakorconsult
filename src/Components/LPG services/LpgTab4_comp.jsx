import React from "react";
import gas1 from "../../assets/images/gas1.jpg";
import gas2 from "../../assets/images/gas2.jpg";
import gas4 from "../../assets/images/gas4.jpg";
import gas5 from "../../assets/images/gas5.jpg";
import gas6 from "../../assets/images/gas6.jpg";
import gas8 from "../../assets/images/gas8.png";
import gas10 from "../../assets/images/gas10.jpg";

function LpgTab4_comp() {
  return (
    <div className="">
      <div className="mb-[66px]">
        <h1 className="text-[33px] leading-[60px] font-bold mb-[30px]">
          LPG GENERATORS AND ACCESSORIES
        </h1>
        <img src={gas1} alt="" className="mb-[30px]" />
        <h1 className="text-[25px] leading-[50px]">
          LPG AS A CHEAPER ALTERNATIVE TO DIESEL FOR POWERING GENERATORS
        </h1>
        <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify">
          LPG can replace diesel as a source of fuel for powering generators
          especially in the telecoms sector where Diesel constitutes a very high
          percentage of the cost of running cell sites due mostly the poor power
          infrastructure in the country and pilferage.
        </p>
      </div>
      <div className="">
        <h1 className="text-[22px] leading-[45px] font-bold mb-[30px]">
          ADVANTAGES OF LPG GENERATORS AGAINST THE DIESEL GENERATORS
        </h1>
        <div className="lg:flex gap-20 mb-52">
          <img src={gas2} alt="" className="lg:h-[400px]" />

          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            The LPG generators last for a reasonable length of time. It can run
            for a period of 24 hours a day, 7 days a week. It is possible to
            achieve standby running hours than diesel powered generators before
            refueling. This is very advantageous, because you don’t require a
            standby operation officer checking for diesel limit in the generator
            all the time. Bhakor Consult also deal on LPG accessories & prepaid
            LPG meters for domestic consumption. Also available are LPG
            accessories for diverse purposes.
          </p>
        </div>
        <div className="relative lg:flex gap-20 mb-32">
          <div className="">
            <img src={gas8} alt="" className="lg:h-[400px]" />
          </div>
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            The LPG generator does not require storage of gas unlike diesel
            which must be stored and available. This helps to reduces cases of
            pilferage or siphoning of gas as common with diesel/petrol
            generators. As a matter of fact, investigations and empirical
            evidence have shown that most organizations lose as much as 50% of
            cost of running diesel generators to theft, pilferage, sharp
            practices associated with purchase and supply of diesel; sometimes
            employee officials conniving with suppliers.
          </p>
        </div>
        <div className="lg:flex flex-row-reverse gap-20 mb-32">
          <img src={gas4} alt="" className="lg:w-[426px] h-auto" />
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            The emissions of an LPG product are less harmful to the environment
            than the emissions from diesel. LPG powered home generators release
            less carbon dioxide per unit of energy than diesel powered
            generators. With the LPG generators, it will be convenient for
            people to carry out their operations close to the generating set
            without been harmed.it is environmentally friendly.
          </p>
        </div>
        <div className="relative lg:flex gap-20 mb-32 h-[450px]">
          <div className="mr-10 h-auto">
            <p className="relative w-[396px] h-[320px] bg-[#F9A825]"></p>
            <img
              src={gas5}
              alt=""
              className="absolute w-[400px]  left-4 top-5"
            />
          </div>
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            The LPG generators run at a quieter engine noise level compared to
            diesel powered generators. This reduces noise pollution and makes
            the environment serene.
          </p>
        </div>
        <div className="lg:flex flex-row-reverse gap-20 mb-52">
          <img src={gas6} alt="" className="lg:h-[400px]" />
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            The initial cost of setting up the LPG powered generators is less
            than that associated with diesel powered generators. The cost of
            switching from the diesel powered generators to LPG powered
            generators is low.
          </p>
        </div>
        <div className="relative lg:flex gap-20 mb-32">
          <div className="">
            <img src={gas8} alt="" className="lg:h-[400px]" />
          </div>
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            Maintenance is relatively cheaper. By comparism:100kva natural gas
            generator regular maintenance requirements: First phase repair and
            maintenance time is 8000-10000 hours; second phase repair and
            maintenance time is 16000 hours; final phase (overhaul time) time is
            32000 hours.
          </p>
        </div>
        <div className="lg:flex flex-row-reverse  gap-20 mb-52">
          <img src={gas8} alt="" className="lg:h-[400px]" />
          <p className="lg:text-[20px] leading-8 lg:leading-[40px] text-justify lg:w-1/2">
            100kva diesel generator regular maintenance requirements: first
            phase repair and maintenance time is 2000-3000 hours; second phase
            repair and maintenance time is 6000-8000 hours; final phase(overhaul
            time) time is 10000-15000 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LpgTab4_comp;
