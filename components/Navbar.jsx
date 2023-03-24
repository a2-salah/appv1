import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../public/logo.png";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" fixed bg-white top-0 w-[100%] z-20 shadow-xl">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <div className="flex items-center gap-1 text-xl font-bold md:text-2xl">
          <span className="italic "></span>
          <Image src={logo} alt="Logo" width={65} height={35} priority />
          <span className="italic text-green-600 ">ReSeT</span>
        </div>

        <div className="hidden gap-10 tracking-wider text-gray-600 md:flex">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="#service" className="hover:text-green-700">
            Services
          </Link>
          <Link href="#categorie" className="hover:text-green-700">
            Programs
          </Link>
          <Link href="/About" className="hover:text-green-700">
            About
          </Link>
        </div>
        <div>
          <Link href="/Contact">
            <button
              id="button"
              className="hidden px-4 py-1 text-green-600 border border-green-600 rounded-md md:block hover:bg-green-600 hover:text-white"
            >
              Contact
            </button>
          </Link>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="block md:hidden"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="block md:hidden"
          />
        )}
      </div>
      {/* Responsive Menu */}
      <div
        className={` duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top[60px] ${
          toggle ? `left-[0]` : `left-[-100%]`
        }`}
      >
        <Link href="/" className="p-5 hover:text-green-700">
          Home
        </Link>
        <Link href="/" className="p-5 hover:text-green-700">
          Services
        </Link>
        <Link href="/" className="p-5 hover:text-green-700">
          About
        </Link>

        <div className="flex flex-col items-center gap-5 mt-48">
          <div className="bg-green-600 w-[250px] h-[1px]"></div>
          <div className="flex gap-10">
            <Link
              href="https://www.facebook.com/"
              target={"_blank"}
              className="hover:text-green-700 hover:-translate-y-1.5 duration-300"
            >
              <BsFacebook size={25} />
            </Link>
            <Link
              href="https://www.twitter.com/"
              target={"_blank"}
              className="hover:text-green-700 hover:-translate-y-1.5 duration-300"
            >
              <BsTwitter size={25} />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target={"_blank"}
              className="hover:text-green-700 hover:-translate-y-1.5 duration-300"
            >
              <BsYoutube size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target={"_blank"}
              className="hover:text-green-700 hover:-translate-y-1.5 duration-300"
            >
              <BsLinkedin size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
