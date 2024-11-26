'use client';
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Header() {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const togleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const tl = useRef();
    useGSAP(() => {
        // Set initial states
        gsap.set("#menu-overlay", {
            opacity: 0,
            y: '-100%'
        });

        tl.current = gsap.timeline({ paused: true })
            .to("#mblnav", {
                y: 0,
                duration: 0.5,
                ease: "power4.inOut"
            })
            .to("#menu-overlay", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power4.inOut"
            }, "<")
            .from("#menu > *", {
                y: 50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out"
            });
    }, { scope: container });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    // Handle scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            // On some mobile devices, we also need to prevent touchmove
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            // Store the current scroll position
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            // Re-enable scrolling
            document.body.style.overflow = 'unset';
            document.body.style.position = 'static';
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'static';
            document.body.style.top = '';
            document.body.style.width = 'auto';
        };
    }, [isMenuOpen]);
    return (
        <nav ref={container} className="absolute top-0 left-0 right-0 bg-transparent">
            <div id="mblnav" className="max-w-7xl ~px-4/8 gap-20 mx-auto flex items-center justify-between ~pt-6/12">
                <Image
                    src={'/images/general/logo.svg'}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[204px] h-[34px]"
                />
                <div className="md:flex hidden items-center ~gap-8/16">
                    <div className="flex items-center ~gap-6/14 ~text-sm/lg font-light">
                        <p className="cursor-pointer text-customYellow">HOME</p>
                        <p className="cursor-pointer  text-nowrap">ABOUT US</p>
                        <p className="cursor-pointer">SERVICES</p>
                        <p className="cursor-pointer">TECHNOLOGIES</p>
                        <p className="cursor-pointer">BLOGS</p>
                    </div>
                </div>
                <div className="md:flex hidden">
                    <button className="bg-white text-nowrap text-black font-bold text-sm ~px-8/12 ~py-2/3 rounded-[41px]">CONTACT US</button>
                </div>
                <div className="md:hidden block">
                    <IoMenu onClick={togleMenu} className="w-[45px] h-[20px]" />
                </div>
            </div>
            <div id="menu-overlay" className="opacity-0 fixed top-0 left-0 w-full bg-main bg-no-repeat bg-cover md:hidden">
                <div className="flex justify-between w-full pt-10 items-center px-4">
                    <div className="flex items-center gap-2">
                        <p className="bg-white rounded-full w-7 h-7"></p>
                        <p>Your Logo</p>
                    </div>
                    <div>
                        <MdOutlineCancel onClick={togleMenu} className="text-3xl" />
                    </div>
                </div>
                <div id="menu" className="flex min-h-screen text-2xl h-screen flex-col justify-center items-center gap-10">
                    <p className="text-customYellow">Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Technologies</p>
                    <p>Projects</p>
                    <p>Blogs</p>
                    <button>Contact Us</button>
                </div>
            </div>
        </nav>
    )
}