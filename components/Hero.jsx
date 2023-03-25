import React from "react";
import Button from "./Button";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='bg-[url("/hero3.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container z-10 px-4 mx-auto">
        <div className="text-center text-white flex flex-col gap-[20px] md:gap-[]40px]">
          <div>
            <h1 className="font-semibold tracking-wider md:text-3xl text 2xl lg:text-5xl">
              ReSeT
            </h1>
          </div>

          <div className="">
            <h1 className="py-2 font-semibold tracking-wider md:text-3xl lg:text-5xl text 2xl">
              <span className="text-green-600 ">
                {" "}
                Refugee Settlement Services{" "}
              </span>{" "}
            </h1>
          </div>
          <div className=" mx-auto bg-green-600 h-[2px] w-[150px]"></div>
          <div>
            <p className="py-4 text-sm tracking-widest text-gray-300 md:text-xl ">
              {" "}
              Supporting our Newcomers and Refugees
            </p>
            <div className="py-4">
              <Button link="#" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 flex-col items-center hidden gap-5 md:flex right-20 top-32">
        <div className="bg-green-600 w-[1.5px] h-[250px]"></div>
        <Link
          href="https://www.facebook.com/"
          target={"_blank"}
          className="hover:text-green-700 hover:-translate-x-1.5 duration-300"
        >
          <BsFacebook size={25} />
        </Link>
        <Link
          href="https://www.twitter.com/"
          target={"_blank"}
          className="hover:text-green-700 hover:-translate-x-1.5 duration-300"
        >
          <BsTwitter size={25} />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target={"_blank"}
          className="hover:text-green-700 hover:-translate-x-1.5 duration-300"
        >
          <BsYoutube size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/"
          target={"_blank"}
          className="hover:text-green-700 hover:-translate-x-1.5 duration-300"
        >
          <BsLinkedin size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
