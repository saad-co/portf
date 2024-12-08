import Image from "next/image";
import React from "react";

const Screen08Card = ({ image, name, position }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 max-w-80 mx-auto">
        <Image
          src={image}
          alt={name}
          width={700}
          height={700}
          className="w-full h-auto"
        />
        <div className="text-center">
          <h1 className="text-[#FFD258] uppercase font-bold ~text-base/lg">
            {name}
          </h1>
          <p className="~text-sm/base">{position}</p>
        </div>
      </div>
    </>
  );
};

export default Screen08Card;
