import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-green-600 min-h-[500px] md:min-h-[250px]">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center py-16 md:py-8 md:flex-row md:justify-between gap-y-5">
          <div className="flex items-center gap-1 text-xl font-bold md:text-2xl lg:text-3xl">
            <Image src={logo} alt="Logo" width={75} height={25} priority />
          </div>
          <div className="flex flex-col gap-8 tracking-wider text-center text-gray-800 md:flex-row md:pt-16 md:flex">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="#service" className="hover:text-white">
              Services
            </Link>
            <Link href="#categorie" className="hover:text-white">
              Programs
            </Link>
            <Link href="#categorie" className="hover:text-white">
              About
            </Link>
          </div>
          <div className="flex items-center pr-8 gap-x-5 md:pt-16 ">
            <Link
              href="https://www.facebook.com/"
              target={"_blank"}
              className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
            >
              <BsFacebook size={25} />
            </Link>
            <Link
              href="https://www.twitter.com/"
              target={"_blank"}
              className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
            >
              <BsTwitter size={25} />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target={"_blank"}
              className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
            >
              <BsYoutube size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target={"_blank"}
              className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
            >
              <BsLinkedin size={25} />
            </Link>
          </div>
        </div>

        <p className="pb-3 text-sm text-center text-white md:mt-12">
          Designed by A@2
        </p>
      </div>
    </footer>
  );
};

export default Footer;
