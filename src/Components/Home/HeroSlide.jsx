import { useState, useEffect } from "react";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

function HeroSlide({
  slide,
  isActive,
  handlePrevSlide,
  handleNextSlide,
  totalSlides,
  activeIndex,
}) {
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(handleNextSlide, 7000);
    }

    setAutoSlideInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, handleNextSlide]);

  return (
    <div
      className={`flex flex-col-reverse lg:flex-row relative max-w-[1400px] mx-auto px-3 bg-center py-28 ${isActive ? " transition ease-in-out duration-700" : "hidden"
        }`}
    >
      <div className="lg:w-[40%]">
        <div className="flex flex-col bg-white justify-center xl:pl-10 lg:pl-5 lg:pr-20 xl:pr-[100px] lg:absolute lg:w-[50%] xl:w-[58%] lg:mt-2 xl:mt-28 rounded transition ease-in-out duration-700">
          <h1 className="font-bold lg:text-[40px] lg:leading-[60px] xl:text-[50px] xl:leading-[80px] mt-10">
            {slide.title}
          </h1>
          <p className="text-sm xl:text-base leading-7 py-2">{slide.text}</p>

          <Link to='/about-bhakor' className="bg-[#00B140] lg:w-fit py-2 px-6 mt-12 lg:mt-6 xl:mt-10 lg:mb-8 xl:mb-16 text-white rounded">
            Learn More
          </Link >
        </div>
        <div className=" h-full w-full flex gap-5 items-end justify-evenly overflow-y-hidden">
          {/* NEXT AND PREVIOUS BUTTON  */}
          <div className="flex gap-1 lg:gap-6 justify-center items-center">
            <div
              className="cursor-pointer py-1 font-medium"
              onClick={handlePrevSlide}
            >
              <p className="lg:text-2xl text-[#00B140] ">Prev</p>
            </div>

            {/* Next Button */}
            <div
              className="cursor-pointer py-1 font-medium"
              onClick={handleNextSlide}
            >
              <p className="lg:text-2xl text-[#00B140] ">Next</p>
            </div>
          </div>

          <div className="flex justify-center items-center py-1">
            <img src={arrow} alt="" />
          </div>

          {/* Number Indicator */}
          <div className="flex justify-center items-center py-1">
            <span className=" text-lg font-bold">
              {isActive ? activeIndex + 1 : "/"}
            </span>
            <span className=" text-lg mx-1">/</span>
            <span className=" text-lg">{totalSlides}</span>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%]">
        <img
          src={slide.image}
          alt=""
          className="xl:w-[870px] xl:h-auto  transition ease-in-out duration-700"
        />
      </div>
    </div>
  );
}

export default HeroSlide;
