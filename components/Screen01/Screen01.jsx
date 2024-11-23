import { Screen01SVG } from "@/assets/images";
import Image from "next/image";
export default function Screen01() {
    return (
        <section className="flex min-h-screen bg-main bg-no-repeat bg-cover items-center h-screen">
            <div className="max-w-7xl mx-auto flex justify-between w-full">
                <div className="w-1/2 flex flex-col justify-center gap-7 pt-36">
                    <h1 className="text-customYellow text-5xl">
                        TRANSFORMING YOUR VISION
                        INTO AN EPIC CREATION
                    </h1>
                    <p>
                        We understand the expectations of gamers of today, thus creating games that involve the latest trends of technology and expertise including Metaverse/NFT/Blockchain
                    </p>
                    <ol className="list-disc pl-5 pt-3">
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
                <div className="w-1/2 pt-36">
                    <Image
                        src={Screen01SVG}
                        alt="Screen01SVG"
                        width={679}
                        height={679}
                    />
                </div>
            </div>
        </section>
    );
}