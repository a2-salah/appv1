import React from "react";
import Button from "./Button";
import Image from "next/image";

const Card = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden duration-300 rounded-xl group hover:scale-105 hover:shadow-md">
      <Image
        src={image}
        alt="/"
        width="300"
        height="150"
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      />
      <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-5 text-white duration-300 opacity-0 bg-black/50 rounded-xl bottom-20 group-hover:bottom-0 group-hover:opacity-100 translate-all">
        <h3 className="mt-4 text-2xl font-bold ">{title}</h3>
        <Button link="#" text="Explore" />
      </div>
    </div>
  );
};

export default Card;
