'use client'
import Screen03CardComp from './Screen03CardComp';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { card01, card02, card03, card04, card05, card06, card07, card08 } from '@/assets/images';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const json = [
    {
        "title": "MOBILE GAME DEVELOPMENT",
        "description": "We specialize in creating engaging and innovative mobile games that captivate players worldwide. From casual puzzles to high-performance RPGs, our games are tailored to deliver unique experiences on iOS and Android. Let’s bring your mobile gaming vision to life!",
        "imgSrc": card01
    },
    {
        "title": "3D Game Development",
        "description": "Dive into immersive worlds with our cutting-edge 3D game development services. We craft visually stunning environments and lifelike characters for platforms like PCs, consoles, and mobile devices. Our 3D games redefine how players connect with their favorite genres.",
        "imgSrc": card02
    },
    {
        "title": "VIRTUAL Reality",
        "description": "Step into the future with our VR gaming solutions, offering fully immersive and interactive experiences. We design VR games that push the boundaries of reality, delivering adventure, simulation, and fitness applications for leading VR platforms like Oculus and HTC Vive.",
        "imgSrc": card03
    },
    {
        "title": "Metaverse Game Development",
        "description": "Enter the next generation of gaming with our metaverse solutions. We build expansive virtual worlds where players can socialize, create, and trade. Whether it’s user-generated content or virtual economies, our metaverse games are designed to transform digital experiences.",
        "imgSrc": card04
    },
    {
        "title": "Blockchain and NFT Game Development",
        "description": "Leverage blockchain technology to offer secure, transparent, and rewarding gaming experiences. Our NFT-based games empower players with ownership of in-game assets and play-to-earn opportunities. We help you shape the future of decentralized gaming.",
        "imgSrc": card05
    },
    {
        "title": "Game Art and Design",
        "description": "Unleash creativity with our game art and design services. From character and environment design to animations and UI/UX, we bring your game’s visual story to life. Our art solutions ensure your game captivates players from the first glance.",
        "imgSrc": card06
    },
    {
        "title": "Extended Reality (XR) Solutions",
        "description": "Step into the future with our VR gaming solutions, offering fully immersive and interactive experiences. We design VR games that push the boundaries of reality, delivering adventure, simulation, and fitness applications for leading VR platforms like Oculus and HTC Vive.",
        "imgSrc": card07
    },
    {
        "title": "PC Games Development",
        "description": "Step into the future with our VR gaming solutions, offering fully immersive and interactive experiences. We design VR games that push the boundaries of reality, delivering adventure, simulation, and fitness applications for leading VR platforms like Oculus and HTC Vive.",
        "imgSrc": card08
    },
];


export const Screen03 = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = containerRef.current.children;

        gsap.to(cards, {
            xPercent: -100 * (cards.length - 0.5),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex flex-col rounded-t-3xl md:rounded-t-[120px] bg-page03-gradient items-center "
        >
            <div className="max-w-7xl ~px-4/8 pb-20 ~gap-8/16 mx-auto flex flex-col justify-center items-center w-full">
                <h1 className='font-bold ~text-3xl/6xl text-customYellow mx-auto ~pt-10/24'>
                    WHAT WE DO
                </h1>
                <div
                    ref={containerRef}
                    className="flex items-stretch ~gap-8/16 w-full overflow-x-hidden rounded-3xl"
                >
                    {json.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                        >
                            <Screen03CardComp
                                title={item.title}
                                description={item.description}
                                imgSrc={item.imgSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Screen03;