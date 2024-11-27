'use client'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pic1, pic2, pic3, pic4 } from '@/assets/images';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const Screen06 = () => {
    const sectionRef = useRef(null);
    const refElem = useRef([]);

    useGSAP(() => {
        refElem.current.forEach((el, index) => {
            if (el) {
                gsap.to(el, {
                    scale: 0.7,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 5%",
                        end: "bottom 20%",
                        scrub: true,
                        pin: true,
                    },
                });
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="flex flex-col bg-page03-gradient items-center ">
            <div className="max-w-7xl ~px-4/8 pb-20 ~gap-8/16 mx-auto flex flex-col justify-center items-center w-full">
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-start gap-2 w-full'>
                        <h1 className='font-bold text-center md:text-start ~text-5xl/8xl text-customYellow ~pt-10/24'>
                            OUR
                        </h1>
                        <p className='font-bold md:text-start text-center ~text-5xl/8xl'>
                            PEOJECTS
                        </p>
                    </div>
                    <div className="bg-gold-gradient hidden md:block w-fit py-1 px-3 rounded-[47px]">
                        <button className="bg-custom-gradient text-sm px-10 py-5 text-nowrap rounded-[47px]">
                            SEE ALL PROJECTS
                        </button>
                    </div>
                </div>
                {["1", "2", "3", "4"].map((bgClass, index) => (
                    <div
                        key={index}
                        ref={(el) => refElem.current[index] = el}
                        className={`bg-card${bgClass} h-96  md:min-h-screen sticky top-10 flex flex-col justify-center ~px-4/10 bg-no-repeat bg-contain w-full rounded-t-3xl md:rounded-[60px]`}
                    >
                        <div className="flex flex-col h-full pt-28 md:~pt-60/96">
                            <h1 className="~text-2xl/6xl font-bold">YOUNG WARRIOR</h1>
                            <div className="flex w-full justify-between items-center">
                                <div className="bg-gold-gradient w-fit py-1 px-2 rounded-[47px]">
                                    <button className="bg-custom-gradient text-sm px-2 py-1 md:px-4 md:py-3 text-nowrap rounded-[47px]">
                                        OUR PROJECTS
                                    </button>
                                </div>
                                <div className="flex justify-center items-center gap-4">
                                    <Image
                                        src={pic1}
                                        alt="icons"
                                        className="w-7 h-7 sm:w-16 sm:h-16 md:w-14 md:h-14"
                                    />
                                    <Image
                                        src={pic2}
                                        alt="icons"
                                        className="w-7 h-7 sm:w-16 sm:h-16 md:w-14 md:h-14"
                                    />
                                    <Image
                                        src={pic3}
                                        alt="icons"
                                        className="w-7 h-7 sm:w-16 sm:h-16 md:w-14 md:h-14"
                                    />
                                    <Image
                                        src={pic4}
                                        alt="icons"
                                        className="w-7 h-7 sm:w-16 sm:h-16 md:w-14 md:h-14"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Screen06;