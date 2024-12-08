import Image from "next/image";
import React from "react";

const Screen04Logo = ({ src }) => {
  return (
    <>
      <Image
        src={src}
        alt="i1"
        width={400}
        height={400}
        className="w-52 h-auto ~rounded-lg/2xl"
      />
    </>
  );
};

export default Screen04Logo;
