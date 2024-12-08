"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import FooterLink from "./FooterLink";

export const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => {
    setOpenMenu(!openMenu);
  };
  const [openMenu1, setOpenMenu1] = useState(false);
  const toggle1 = () => {
    setOpenMenu1(!openMenu1);
  };

  return (
    <section className="flex bg-[#380D0D] bg-no-repeat bg-cover items-center">
      <div className="max-w-7xl mx-auto ~px-4/8 pb-20 ~gap-8/16 flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 pt-32 w-full">
          <div className="flex flex-col gap-2">
            <Image
              src={"./images/general/footer_logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            <p className="text-base text-center md:text-start">
              ImmersaLynx is an independent game studio dedicated to crafting
              original and immersive games for PC, consoles, mobile platforms,
              and emerging technologies like VR and AR.
            </p>
          </div>
          <div className="md:flex flex-col items-center hidden">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-start">ImmersaLynx</h1>
              <ul className="text-base text-start flex flex-col gap-4">
                <FooterLink href="#home" text="HOME" />
                <FooterLink href="#about-us" text="ABOUT US" />
                <FooterLink href="#services" text="SERVICES" />
                <FooterLink href="#technologies" text="TECHNOLOGIES" />
                <FooterLink href="#blogs" text="BLOGS" />
                <FooterLink href="#contact" text="CONTACT US" />
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:hidden">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-bold text-start">ImmersaLynx</h1>
                <RiArrowDropDownLine
                  onClick={toggle}
                  className={`duration-400 text-3xl ${
                    openMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  !openMenu ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                }`}>
                <ul className="inner overflow-hidden text-base text-start flex flex-col gap-4">
                  <FooterLink href="#home" text="HOME" />
                  <FooterLink href="#about-us" text="ABOUT US" />
                  <FooterLink href="#services" text="SERVICES" />
                  <FooterLink href="#technologies" text="TECHNOLOGIES" />
                  <FooterLink href="#blogs" text="BLOGS" />
                  <FooterLink href="#contact" text="CONTACT US" />
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex hidden flex-col items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Our SERVICES</h1>
              <ul className="text-base text-start flex flex-col gap-4">
                <li>Mobile GameS </li>
                <li>3D GameS</li>
                <li>Virtual Reality (VR) </li>
                <li>Augmented Reality (AR)</li>
                <li>Metaverse</li>
                <li>Blockchain and NFT</li>
                <li>2d & 3d Game Art and Design</li>
                <li>2D GameS Development</li>
                <li>Extended Reality (XR) Solutions</li>
                <li>PC GameS Development</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:hidden">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-bold text-start">Our SERVICES</h1>
                <RiArrowDropDownLine
                  onClick={toggle1}
                  className={`duration-400 text-3xl ${
                    openMenu1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  !openMenu1 ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                }`}>
                <ul className="inner overflow-hidden text-base text-start flex flex-col gap-4">
                  <li>Mobile GameS </li>
                  <li>3D GameS</li>
                  <li>Virtual Reality (VR) </li>
                  <li>Augmented Reality (AR)</li>
                  <li>Metaverse</li>
                  <li>Blockchain and NFT</li>
                  <li>2d & 3d Game Art and Design</li>
                  <li>2D GameS Development</li>
                  <li>Extended Reality (XR) Solutions</li>
                  <li>PC GameS Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white w-full relative flex justify-center">
          <Image
            src={"./images/general/footer_small_logo.svg"}
            alt="logo hai"
            width={50}
            height={10}
            className="absolute top-0 w-auto -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col-reverse gap-4 md:flex-row w-full justify-between">
          <p className="w-full text-center md:text-start">
            © 2024 ImmersaLynx All rights reserved
          </p>
          <div className="flex gap-8 items-center justify-center md:justify-end w-full mx-auto">
            <FaFacebookF className="text-white text-3xl" />
            <FaLinkedinIn className="text-white text-3xl" />
            <FaInstagram className="text-white text-3xl" />
            <FaXTwitter className="text-white text-3xl" />
            <MdOutlineMail className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
