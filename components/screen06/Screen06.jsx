'use client'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ourProjectsLogo1, ourProjectsLogo2, ourProjectsLogo3, ourProjectsLogo4 } from '@/assets/images';
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
                        start: "top 0%",
                        end: "bottom 10%",
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
                <div className='flex justify-between items-end w-full'>
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
                {["bg-card1", "bg-card2", "bg-card3", "bg-card4"].map((bgClass, index) => (
                    <div
                        key={index}
                        ref={(el) => refElem.current[index] = el}
                        className={`h-96 ${bgClass}  md:min-h-[calc(100vh-4rem)] sticky top-10 flex flex-col justify-center ~px-4/20 bg-no-repeat bg-center bg-cover w-full rounded-3xl md:rounded-[60px]`}
                    >
                        <div className="flex flex-col h-full pb-8 gap-6 justify-end md:gap-4 md:~pb-12/24">
                            <div className="flex w-full justify-between items-centeenr">
                                <div className="bg-gold-gradient w-fit py-1 px-2 rounded-[47px]">
                                    <button className="bg-custom-gradient text-sm px-2 py-1 md:px-4 md:py-3 text-nowrap rounded-[47px]">
                                        OUR PROJECTS
                                    </button>
                                </div>
                                <div className="flex justify-center items-center gap-4">
                                    <Image
                                        src={ourProjectsLogo1}
                                        alt="icons"
                                        className="w-7 h-7 md:w-9 md:h-9"
                                    />
                                    <Image
                                        src={ourProjectsLogo2}
                                        alt="icons"
                                        className="w-7 h-7 md:w-9 md:h-9"
                                    />
                                    <Image
                                        src={ourProjectsLogo3}
                                        alt="icons"
                                        className="w-7 h-7 md:w-9 md:h-9"
                                    />
                                    <Image
                                        src={ourProjectsLogo4}
                                        alt="icons"
                                        className="w-7 h-7 md:w-9 md:h-9"
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