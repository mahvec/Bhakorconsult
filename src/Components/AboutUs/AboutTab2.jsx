import React from "react";
import image from "../../assets/images/about2.jpg";

function AboutTab2() {
  return (
    <div>
      <div>
        <div className="lg:flex justify-between pb-10">
          <div className="py-16">
            <img
              src={image}
              className="lg:w-[450px] lg:h-[490px]"
              alt="image 1"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-[30px] leading-[60px] font-bold mb-5">
              ENVIRONMENTAL POLICY
            </p>
            <p className="text-justify lg:text-[20px] leading-8 lg:leading-10 ">
              As a responsible corporate entity, BHAKOR CONSULT LTD is committed
              to protecting the environment in compliance with the environmental
              laws and the practices of the communities where it operates. While
              pursuing our activities we endeavor to minimize any adverse impact
              on air, water and land by means of pollution prevention and energy
              and water conservation. By doing so, we achieve cost savings, an
              increased operational efficiency, improved quality of products and
              services and ultimately, a safe environment for the community as a
              whole and a healthy workplace for our employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTab2;
