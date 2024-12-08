import { furqanImg, mubasherImg } from "@/assets/images";
import React from "react";
import Screen08Card from "./Screen08Card";

export const Screen08 = () => {
  return (
    <section className="flex bg-page08-gradient bg-no-repeat bg-cover items-center">
      <div className="max-w-2xl ~pb-12/24 ~pt-10/16 ~px-4/8 mx-auto flex flex-col items-center w-full">
        <h1 className="text-center ~text-5xl/8xl w-full font-bold">OUR TEAM</h1>
        <div className="flex flex-col ~mt-14/20 md:flex-row justify-between ~gap-12/16 w-full">
          <Screen08Card
            image={mubasherImg}
            name={"Dr. Mian Muhammad Mubasher"}
            position={"CEO & FOUNDER"}
          />
          <Screen08Card
            image={furqanImg}
            name={"Muhammad Furqan"}
            position={"TECHNICAL LEAD"}
          />
        </div>
      </div>
    </section>
  );
};

export default Screen08;
