import { Screen02SVG } from "@/assets/images";
import Image from "next/image";

export default function Screen02() {
  return (
    <section
      id="about-us"
      className="flex rounded-t-3xl md:rounded-t-[120px] bg-dark-gradient items-center mb-[-30px] md:mb-[-90px]">
      <div className="max-w-7xl md:pb-40 pb-20 ~px-4/8 ~gap-8/16 mx-auto flex flex-col-reverse justify-center items-center md:flex-row md:items-center md:justify-between w-full">
        <div className="md:w-1/2 ~pt-2/20">
          <Image
            src={Screen02SVG}
            alt="Screen02SVG"
            width={675}
            height={600}
            className="rounded-3xl"
          />
        </div>
        <div className="md:w-1/2 pt-12 self-center">
          <div className="flex flex-col gap-2">
            <h1 className="~text-3xl/5xl font-semibold w-full">
              FROM IDEAS TO <span className="text-[#FF000D]">REALITY</span>
            </h1>
            <p className="text-[#FF000D] ~text-xl/3xl">ABOUT US</p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p>
              Welcome to <span className="text-customYellow">ImmersaylnX</span>,
              where innovation and creativity converge to bring your digital
              dreams to life. We are dedicated to transforming ideas into
              immersive, interactive experiences. Our expert team of developers,
              artists, and designers is passionate about pushing the boundaries
              of technology to deliver high-quality, engaging products. At{" "}
              <span className="text-customYellow">ImmersaylnX</span>, we
              prioritize your vision and work closely with you to ensure our
              solutions exceed expectations. Join us on our journey to redefine
              the future of gaming and digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
