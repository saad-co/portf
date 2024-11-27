import React from 'react'
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRobot } from "react-icons/fa6";
import Image from 'next/image';

export const CardComp = ({ imgSrc, title, short, desc, btnText01, btnText02 }) => {
    return (
        <div className="w-full rounded-3xl flex flex-col items-start gap-5">
            <div className="flex border rounded-3xl p-1 border-white flex-col-reverse md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
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
                <div className="w-full text-center md:text-start md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6 text-white">
                    <div className='flex items-center justify-start gap-3'>
                        <div className='flex items-center px-2 py-2 justify-center bg-white rounded-full'>
                            <LiaUserEditSolid className='w-10 h-10 text-black' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-start w-full text-xl font-extrabold'>
                                MUHAMMAD FURQAAN
                            </h1>
                            <p className='text-start w-full'>
                                NOVEMBER 14, 2024 - 9:08 AM
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='~text-2xl/4xl font-extrabold'>
                            {title || "MOBILE GAME DEVELOPMENT"}
                        </h1>
                        <div className='flex items-center gap-2'>
                            <FaRobot className='w-5 h-5' />
                            <p>
                                {short || "WE SPECIALIZE IN CREATING ENGAGING AND INNOVATIVE MOBILE GAMES THAT CAPTIVATE PLAYERS WORLDWIDE. FROM CASUAL PUZZLES TO HIGH-PERFORMANCE RPGS, OUR GAMES ARE TAILORED TO DELIVER UNIQUE EXPERIENCES ON IOS AND ANDROID. LET'S BRING YOUR MOBILE GAMING VISION TO LIFE!"}
                            </p>
                        </div>
                        <p className='text-sm'>
                            {desc}
                        </p>
                        <div className='flex justify-end w-full'>
                            <div className="bg-gold-gradient hidden md:block w-fit py-1 px-3 rounded-[47px]">
                                <button className="bg-custom-gradient text-sm px-10 py-4 rounded-[47px]">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 w-1/3">
                <button className="flex-1 py-4 px-5 border border-white rounded-3xl text-sm min-w-32">
                    {btnText01}
                </button>
                <button className="flex-1 py-4 px-5 border border-white rounded-3xl text-sm min-w-32">
                    {btnText02}
                </button>
            </div>

        </div >
    )
}

export default CardComp;