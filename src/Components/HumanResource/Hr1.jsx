import React from "react";
import back from "../../assets/images/aboutbhakor.jpg"

function Hr1() {
  return (
    <div>
      <div className={`bg-${back} mt-10 lg:mt-28 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-[590px]`} >
        <div className="w-fit lg:w-[640px] lg:h-auto text-black bg-white mx-5 p-3 leading-6 py-10 lg:pl-10 lg:pr-[100px]">
          <p className="font-bold text-[33px] leading-10 mb-5 lg:text-[48px] lg:leading-[70px] p-1">
            Human Resources
          </p>
          <p className="lg:text-xl  lg:leading-10 text-justify mb-5 p-1">
            At BHAKOR CONSULT We are committed to attracting, developing, and
            retaining the best talent in the industry, and providing a workplace
            that fosters creativity, innovation, and excellence. We value
            diversity, inclusivity, and respect for all individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hr1;
