import React from "react";
import Image1 from "../../assets/images/Rectangle108.jpg";
import Image2 from "../../assets/images/Rectangle109.jpg";
import Image4 from "../../assets/images/Rectangle111.jpg";
import Image3 from "../../assets/images/Rectangle110.jpg";
import ImageCarousel from "../../utils/ImageCarousel";

function LpgTab_comp() {
  const images = [Image1, Image2, Image3, Image4];
  return (
    <div>
      <div className="mb-28 ">
        <div className="mb-[60px]">
          <h1 className="text-[30px] leading-[60px] font-bold mb-5">
            LPG DRISTRIBUTION SERVICE
          </h1>
          <img src={Image1} alt="" className="lg:h-[440px] w-auto" />
          <p className="my-[10px] text-justify leading-8 ">
            Bhakor is a major distributor of LPG products in Nigeria and duly
            registered to sell LPG across the nation and beyond. Bhakor has in
            its kitty, fleets of Bridger trucks for bulk delivery to all parts
            of the country for both commercial and industrial applications and
            also operates a fleet of tricycles for door to door gas distribution
            to meet the daily demands of domestic end users within the country.
          </p>
        </div>
        <div className="lg:flex gap-5">
          <div className="lg:hidden">
            <ImageCarousel images={images} />
          </div>
          <div className="lg:w-1/2 leading-10 text-justify">
            LPG is used as a fuel in a range of applications including in
            heating and cooking appliances, industrial applications, in vehicles
            and as a propellant and refrigerant. LPG can be obtained primarily
            as propane, butane or a mixture of the two. A powerful odorant is
            added so that it is easily detected. In line with our vision to
            continuously deliver unbeatable services and benefits to our
            customers, Bhakor Consult Ltd has strengthened its LPG business with
            the installation of fully automated modern and movable LPG filling
            plants in Lagos and Abuja, in addition to plants in Port Harcourt
            and other locations we would be modernizing in the nearest future.
            We also have commenced installations of LPG skid plants and auto gas
            dispensers in key outlets in Abuja and later Lagos. The running cost
            for LPG generators is less than that of diesel powered generators,
            with LPG costing about half price of diesel. This makes the LPG
            powered generators cost effective. Below is an analysis showing that
            running LPG generators is cost effective as compared to diesel
            powered generators.
          </div>
          <div className="hidden lg:w-1/2 lg:flex flex-col gap-3 mt-2">
            <img src={Image2} alt="" className="w-full h-[210px]" />
            <img src={Image3} alt="" className="w-full h-[210px]" />
            <img src={Image4} alt="" className="w-full h-[210px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LpgTab_comp;
