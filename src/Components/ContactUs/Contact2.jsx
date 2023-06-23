import React from "react";
import { CiMail, CiUser, CiLocationOn } from "react-icons/ci";

function Contact2() {
  return (
    <div className="max-w-[1400px] mx-auto px-5 my-20">
      <div className="lg:flex gap-10  ">
        <div className="lg:w-1/2 border mb-10 lg:mb-0 p-5 lg:p-10">
          <p className="text-[25px] leading-[50px] font-bold mb-5">
            Our customer service team will respond to your inquiry as soon as
            possible.
          </p>
          <form action="">
            <div className="lg:flex gap-10">
              <div className="flex gap-2 w-full items-center my-1 rounded mb-5 lg:mb-0 bg-gray-100 p-1">
                <span className="text-[#FF7754] p-1">
                  <CiUser />
                </span>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full py-1 outline-none bg-gray-100"
                />
              </div>
              <div className="flex gap-2 w-full items-center my-1 rounded  bg-gray-100 p-1">
                <span className="text-[#FF7754] p-1">
                  <CiMail />
                </span>
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full py-1 outline-none bg-gray-100"
                />
              </div>
            </div>

            <textarea
              rows="6"
              cols=""
              placeholder="Message"
              className="bg-gray-100 outline-none w-full p-2 mt-5"
            ></textarea>

            <button className="p-2 py-3 bg-[#00B140] text-white w-full rounded-md mt-5">
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-1/2">
          <div className="border w-full p-5 mb-10">
            <div className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] flex items-center justify-center text-white font-bold bg-[#00B140] rounded-lg">
              <CiLocationOn size={40} />
            </div>
            <p className="text-xl leading-10">Our Address</p>
            <p className="text-[25px] leading-[50px] font-bold mb-5">
              Plot 37B, Libreville Crescent Off Aminu Kano Crescent, Wuse 2,
              Abuja.
            </p>
          </div>
          <div className="border w-full p-5">
            <div className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] flex items-center text-white font-bold justify-center bg-[#00B140] rounded-lg">
              <CiMail size={40} />
            </div>
            <p className="text-xl leading-10">Our Mail</p>
            <p className="text-[25px] leading-[50px] font-bold mb-5">
              info@bhakor.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
