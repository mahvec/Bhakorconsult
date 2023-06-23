import React from "react";
import image1 from "../../assets/images/hr1.jpg";
import image2 from "../../assets/images/hr2.jpg";

function Hr2() {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto my-20 px-5">
        <h1 className="text-[33px] leading-[60px] p-1 font-bold uppercase">
          Human Resources
        </h1>
        <div className="lg:flex gap-16 mb-20 mt-10">
          <div className="lg:w-1/2 mb-5">
            <img src={image1} alt="" className="xl:w-[600px] xl:h-[658px] " />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[26px] leading-[50px] font-bold mb-3">
              General Policy
            </h1>
            <p className="lg:leading-10 lg:text-xl leading-8">
              BHAKOR CONSULT LTD recruits well educated, flexible and ambitious
              people who thrive on change and challenge, are innovative,
              self-confident and accept responsibility by taking initiative and
              adapting to a stimulating international working environment. We
              seek leadership traits, excellent communication skills, strong
              academic performance and relevant professional experience.
              Previous experience in an international or multicultural
              environment can be very advantageous.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse gap-16 mb-20">
          <div className="lg:w-1/2 mb-5">
            <img src={image2} alt="" className="xl:w-[600px] xl:h-[658px] " />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[26px] leading-[50px] font-bold mb-3">
              Equal Opportunities
            </h1>
            <p className="lg:leading-10 lg:text-xl leading-8">
              BHAKOR CONSULT LTD is an equal opportunity employer and applies an
              Equal Opportunities Policy (EOP) for this purpose. This policy
              covers all aspects of employment, from advertising of vacancies,
              selection, recruitment and training to working conditions and
              reasons for termination of employment. To ensure that this policy
              operates effectively we regularly monitor the working environment
              and take appropriate action if necessary. Our actions are directed
              to immediately eliminating unlawful direct and indirect
              discrimination and promote equality of opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hr2;
