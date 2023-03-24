import React from "react";

const Headline = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="bg-green-600 w-[100px] h-[2px]"></div>
      <h1 className="text-2xl text-gray-600 uppercase">{title}</h1>
      <div className="bg-green-600 w-[100px] h-[2px]"></div>
    </div>
  );
};

export default Headline;
