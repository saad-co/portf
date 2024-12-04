import Image from "next/image";
import React from "react";

const Screen03CardComp = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-page03-cardGradient w-full rounded-3xl h-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-8 gap-6 md:gap-12">
        <div className="w-full text-center md:text-start md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6 text-white">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            {title || "MOBILE GAME DEVELOPMENT"}
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            {description ||
              "WE SPECIALIZE IN CREATING ENGAGING AND INNOVATIVE MOBILE GAMES THAT CAPTIVATE PLAYERS WORLDWIDE. FROM CASUAL PUZZLES TO HIGH-PERFORMANCE RPGS, OUR GAMES ARE TAILORED TO DELIVER UNIQUE EXPERIENCES ON IOS AND ANDROID. LET'S BRING YOUR MOBILE GAMING VISION TO LIFE!"}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-lg w-full">
            <Image
              src={imgSrc}
              alt="Mobile Game Development"
              width={480}
              height={480}
              className="rounded-xl object-cover w-[480] h-[480]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen03CardComp;