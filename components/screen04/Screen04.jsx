import React from "react";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
} from "@/assets/images";
import Image from "next/image";
import Screen04Logo from "./Screen04Logo";
export const Screen04 = () => {
  return (
    <section id="technologies" className="flex bg-[#190202] items-center">
      <div className="max-w-7xl ~px-4/8 mx-auto flex flex-col items-center ~gap-10/14 sm:flex-row sm:justify-between w-full ~py-8/16">
        <div className="flex flex-col justify-center items-center sm:items-start w-full md:w-1/4 ~gap-2/6 text-center sm:text-start">
          <div className="flex flex-row items-baseline gap-2 sm:flex-col">
            <h1 className="text-customYellow w-full font-bold ~text-3xl/7xl">
              OUR
            </h1>
            <h1 className="text-[#B7020B] font-light ~text-2xl/5xl">
              TECHNOLOGIES
            </h1>
          </div>
          <p className="~text-sm/2xl font-light tracking-wider max-w-[60ch]">
            Wondering what it&apos;s like to bring your gaming vision to life
            with us? Hear directly from our amazing clients who&apos;ve
            partnered with us to create unforgettable gaming experiences!
          </p>
        </div>
        <div className="w-full flex items-center px-10 ~gap-6/10 justify-evenly pt-20 ~h-[20rem]/[34rem] overflow-hidden relative before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-28 before:bg-gradient-to-b before:from-[#190202]/80 before:to-[#190202]/0 before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-28 after:bg-gradient-to-t after:from-[#190202]/80 after:to-[#190202]/0 after:z-10">
          <div className="flex flex-col items-center ~gap-4/7 animate-scroll">
            <Screen04Logo src={logo1} />
            <Screen04Logo src={logo2} />
            <Screen04Logo src={logo3} />
            <Screen04Logo src={logo4} />
            <Screen04Logo src={logo1} />
            <Screen04Logo src={logo2} />
            <Screen04Logo src={logo3} />
            <Screen04Logo src={logo4} />
          </div>
          <div className="pt-20">
            <div className="flex flex-col items-center ~gap-4/7 animate-scroll">
              <Screen04Logo src={logo5} />
              <Screen04Logo src={logo6} />
              <Screen04Logo src={logo7} />
              <Screen04Logo src={logo8} />
              <Screen04Logo src={logo5} />
              <Screen04Logo src={logo6} />
              <Screen04Logo src={logo7} />
              <Screen04Logo src={logo8} />
            </div>
          </div>
          <div className="flex flex-col items-center ~gap-4/7 animate-scroll">
            <Screen04Logo src={logo9} />
            <Screen04Logo src={logo10} />
            <Screen04Logo src={logo11} />
            <Screen04Logo src={logo12} />
            <Screen04Logo src={logo9} />
            <Screen04Logo src={logo10} />
            <Screen04Logo src={logo11} />
            <Screen04Logo src={logo12} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screen04;
