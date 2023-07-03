import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import footer from '../../assets/images/footer.jpg'

function Footer() {
  const foot = footer

  return (
    <div className={`max-w-[1900px] mx-auto h-auto bg-cover bg-center flex items-center justify-center px-5 py-8 lg:px-10 lg:py-10`}
      style={{ backgroundImage: `url(${foot})` }}>
      <div className="max-w-[1400px] mx-auto sm:grid sm:grid-cols-3 sm:gap-16 gap-4">
        <div className="text-white">
          <div className="mb-8 lg:mb-16">
            <p className="text-xl lg:text-[26px] leading-[50px] font-bold">
              <span className="text-[#00B140]">BHAKOR</span>
              <span className="text-white"> CONSULT</span>
            </p>
            <p className="text-white text-justify">
              BHAKOR CONSULT LIMITED is an innovative Information and
              Communication Technologies (ICT) service provider, Energy and
              Consultancy Services company.
            </p>
          </div>
          <div className="mb-8 lg:mb-16">
            <p className="font-bold flex items-center gap-1">
              <span className="text-red-500">
                <CiLocationOn />
              </span>
              <span className="text-white text-xl lg:text-[26px] leading-[50px] font-bold">
                OFFICE ADDRESS
              </span>
            </p>
            <p
              className="text-white text-justify
            "
            >
              No 37 Libreville Crescent, Off Aminu Kano Crescent,Wuse 2, Abuja.
            </p>
          </div>
          <div>
            <p className="flex font-bold items-center gap-1">
              <span className="text-red-500">
                <TbCalendarTime />
              </span>
              <span className="text-white text-xl lg:text-[26px] leading-[50px]">
                HOURS OF OPERATION
              </span>
            </p>
            <p>Mon. to Fri. 9am to 5pm.</p>
            <p> Weekends 9am to 12pm</p>
          </div>
        </div>
        <div className="text-white">
          <div className="mb-8 lg:mb-16">
            <p className="text-xl lg:text-[26px] leading-[50px] font-bold">
              ANNOUNCEMENT
            </p>
            <p className="">
              This is to inform the all visitors that we are presently upgrading
              our online web portal. Updated content is currently being
              procured. Please bear with the management team.
            </p>
          </div>
          <div className="mb-8 lg:mb-16">
            <p className=" text-xl lg:text-[26px] leading-[50px] font-bold">
              WEB DEVELOPMENT
            </p>
            <p className=" text-justify">
              Do you need a website up and running quickly? Then Bhakor Consult
              Ltd. is just what you are looking for. Hurry now to contact us
              <span className="text-[#00B140]">(+2348036007563) </span> or via
              our website:www.bhakor.com.ng or via email:
              <a className="text-[#00B140]" href="info@bhakor.com">
                info@bhakor.com.
              </a>
              Get your website or web portal look impressive today!
            </p>
          </div>
        </div>
        <div className="text-white">
          <div className="mb-8 lg:mb-16">
            <p className="text-xl lg:text-[26px] font-bold leading-[50px]">
              QUICK MENU
            </p>
            <div className="flex flex-col gap-2">
              <Link>About Bhakor Consult</Link>
              <Link>Our Corporate Values</Link>
              <Link>About Our Partners</Link>
            </div>
          </div>
          <div>
            <p className="text-xl lg:text-[26px] font-bold leading-[50px]">
              SOCIAL LINK
            </p>
            <p className="flex gap-5">
              <FaFacebookF />
              <AiFillInstagram />
              <AiOutlineTwitter />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
