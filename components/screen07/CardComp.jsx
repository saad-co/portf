import React from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRobot } from "react-icons/fa6";
import Image from "next/image";

export const CardComp = ({
  blogOwner,
  imgSrc,
  title,
  short,
  desc,
  btnText01,
  btnText02,
}) => {
  return (
    <div className="w-full rounded-3xl flex flex-col items-start gap-5">
      <div className="flex border rounded-3xl w-full p-1 border-white flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="max-w-lg w-full">
            <Image
              src={imgSrc}
              alt="Mobile Game Development"
              width={480}
              height={480}
              className="rounded-xl object-cover w-full h-full md:w-[480] md:h-[480]"
            />
          </div>
        </div>
        <div className="w-full px-2 text-center gap-3 md:text-start md:w-1/2 flex flex-col justify-center text-white">
          <div className="flex items-center justify-start gap-3">
            <LiaUserEditSolid
              className="md:w-10 md:h-10 w-7 h-7 text-black"
              color="#000000"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-start w-full ~text-sm/xl font-extrabold">
                {blogOwner}
              </h1>
              <p className="text-start w-full text-[8px] md:text-sm">
                NOVEMBER 14, 2024 - 9:08 AM
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="~text-2xl/4xl text-start font-extrabold w-full">
              {title || "MOBILE GAME DEVELOPMENT"}
            </h1>
            <div className="flex items-center gap-2">
              <FaRobot className="w-5 h-5" />
              <p>
                {short ||
                  "WE SPECIALIZE IN CREATING ENGAGING AND INNOVATIVE MOBILE GAMES THAT CAPTIVATE PLAYERS WORLDWIDE. FROM CASUAL PUZZLES TO HIGH-PERFORMANCE RPGS, OUR GAMES ARE TAILORED TO DELIVER UNIQUE EXPERIENCES ON IOS AND ANDROID. LET'S BRING YOUR MOBILE GAMING VISION TO LIFE!"}
              </p>
            </div>
            <p className="text-sm text-start">{desc}</p>
            <div className="flex justify-center mx-auto w-full pb-3 md:pb-0">
              <div className="bg-gold-gradient w-fit py-1 px-1 rounded-[47px]">
                <button className="bg-custom-gradient text-sm px-6 py-2 rounded-[47px]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4 md:w-1/3">
        <button className="flex-1 w-full md:w-auto py-4 ~px-3/5 border border-white rounded-3xl ~text-xs/sm">
          {btnText01}
        </button>
        <button className="flex-1 w-full md:w-auto py-4 ~px-3/5 border border-white rounded-3xl ~text-xs/sm">
          {btnText02}
        </button>
      </div>
    </div>
  );
};

export default CardComp;
