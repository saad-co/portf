import { Screen01SVG } from "@/assets/images";
import Image from "next/image";
export default function Screen01() {
    return (
        <section className="flex bg-main bg-no-repeat bg-cover items-center md:mb-[-90px]">
            <div className="max-w-7xl md:pb-40 ~px-4/8 mx-auto flex flex-col-reverse items-center sm:flex-row sm:justify-between w-full">
                <div className="sm:w-1/2 pb-10 flex flex-col justify-center gap-7 sm:pt-36">
                    <h1 className="text-customYellow w-full ~text-3xl/5xl">
                        TRANSFORMING YOUR VISION
                        INTO AN EPIC CREATION
                    </h1>
                    <p className="~text-base/xl">
                        We understand the expectations of gamers of today, thus creating games that involve the latest trends of technology and expertise including Metaverse/NFT/Blockchain
                    </p>
                    <ol className="list-disc pl-5 pt-3 ~text-base/xl">
                        <li>NFT/Blockchain Games</li>
                        <li>Mobile/Web Games</li>
                        <li>PC/Console Games</li>
                        <li>Metaverse/Augmented Reality/Virtual Reality</li>
                    </ol>
                    <div className="bg-gold-gradient w-fit py-1 px-3 rounded-[47px]">
                        <button className="bg-custom-gradient px-10 py-5 rounded-[47px]">
                            OUR PROJECTS
                        </button>
                    </div>
                </div>
                <div className="sm:w-1/2 ~pt-12/36">
                    <Image
                        src={Screen01SVG}
                        alt="Screen01SVG"
                        className="~w-[323]/[679] ~h-[323]/[679]"
                    />
                </div>
            </div>
        </section>
    );
}