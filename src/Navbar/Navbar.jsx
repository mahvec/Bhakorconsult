import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavbarArray } from "./NavbarArray";
import Logo from "../assets/icons/Logo.svg";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full z-50 bg-white">
      {/* // navigation bar on desktop view */}
      <div className="max-w-[1440px] mx-auto z-50 bg-white">
        <div className="lg:flex w-screen mx-auto items-center justify-between max-w-[1440px] px-5 hidden">
          <Link to='/'>
            <img src={Logo} alt="" className="p-1" />
          </Link>
          <div className="text-lg text-white">
            <button className="bg-[#00B140] border rounded-lg mr-5  w-[130px] h-[50px]">
              Login
            </button>
            <button className="bg-[#F9A825] border rounded-lg  w-[130px] h-[50px]">
              Register
            </button>
          </div>
        </div>
        <div className="lg:flex items-center justify-between text-sm xl:text-base mt-2 hidden mb-3 px-5 gap-5">
          <div className="flex items-center justify-between w-full">
            {NavbarArray.map((navbar, id) => (
              <NavLink to={navbar.to} key={id} className="font-medium">
                <p className="hover:text-[#00B140] link link-underline link-underline-black">
                  {navbar.name}
                </p>
              </NavLink>
            ))}
          </div>
          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CiSearch />
              </div>
              <input
                type="search"
                className="block p-1 pl-10 w-[100%] text-sm text-gray-700 bg-gray-100 rounded-lg outline-none border border-gray-200 focus:ring-blue-300 mr-28"
                placeholder="Search..."
              ></input>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile view nav bar */}

      <div className="bg-white fixed w-screen top-0 mx-auto py-3 px-5 z-[100] lg:hidden block ">
        <div className="bg-white flex items-center justify-between z-[100]">
          <Link to="/">
            <img src={Logo} alt="" className="p-1" />
          </Link>

          <div className="flex gap-1 items-center">
            <p className="text-gray-500">
              <CiSearch size={30} />
            </p>
            <div onClick={handleNav} className="text-[#00b140] block lg:hidden">
              {!nav ? (
                <AiOutlineClose size={40} />
              ) : (
                <AiOutlineMenu size={40} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-[60px] h-screen w-[100vw] mx-auto flex flex-col bg-[#CCEFD9] px-10  pt-20 ease-in-out duration-700"
            : "fixed top-[-200%]  w-[100vw] ease-in-out duration-700 mx-auto flex flex-col"
        }
      >
        {NavbarArray.map((navbar, id) => (
          <div key={id} className="p-3 font-medium w-fit self-center">
            <Link
              to={navbar.to}
              className="hover:text-[#00B140] link link-underline link-underline-black"
            >
              {navbar.name}
            </Link>
          </div>
        ))}
        <div className="flex flex-col  text-white gap-2 mt-10 font-medium">
          <button className="bg-[#00b140] py-3 rounded">Login</button>
          <button className="bg-[#F9A825] py-3 rounded">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
