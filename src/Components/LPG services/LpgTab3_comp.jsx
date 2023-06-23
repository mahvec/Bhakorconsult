import React from "react";
import image from "../../assets/images/lpimage.jpg";

function LpgTab3_comp() {
  return (
    <div>
      <div>
        <h1 className="text-[33px] leading-[60px] font-bold mb-[30px]">
          BHAKOR LPG SUPPLY AND DISTRIBUTION
        </h1>
      </div>
      <div className="lg:flex gap-10">
        <img src={image} alt="" className="lg:w-[443px] lg:h-[548px]" />
        <p className="lg:text-[20px] leading-8 lg:leading-[40px] lg:w-1/2">
          At Bhakor Consult Ltd, we are proactive at ensuring consistent
          availability of LPG product to our customers nationwide through
          diligent sourcing and effective haulage of these products. Our main
          sources of products include the PPMC depots and imports. Imports and
          PPMC cargoes are received directly from Bonny depot through the
          Marketers jetty and distributed to customers approved locations
          nationwide. Bhakor maintains a policy of hiring reliable transporters
          with road worthy trucks that meet the required Health, Safety and
          Environment 'HSE' standards. They are paid freight rates monthly after
          satisfactory delivery of products. These rates are determined by the
          locations or the distances covered by the trucks. These trucks are
          screened daily by our team of Health, Safety and Environment personnel
          to ensure that the required HSE standards are met before they are
          allowed into the installations/depots for loading. At Bhakor, we have
          a team of experts to install in your factories, installations or for
          your domestic use. We also provide professional installations that
          best suite clients needs at very minimal cost.
        </p>
      </div>
    </div>
  );
}

export default LpgTab3_comp;
