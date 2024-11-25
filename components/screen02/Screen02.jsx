import { Screen02SVG } from "@/assets/images";
import Image from "next/image";

export default function Screen02() {
    return (
        <section className="flex rounded-t-3xl md:rounded-t-[120px] bg-dark-gradient items-center mb-[-30px] md:mb-[-90px]">
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
                        <h1 className="~text-3xl/5xl font-semibold w-full">FROM IDEAS TO <span className="text-[#FF000D]">REALITY</span></h1>
                        <p className="text-[#FF000D] ~text-xl/3xl">ABOUT US</p>
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                        <p>
                            <span className="text-customYellow"> ImmersalynX</span> is an award winning mobile app and game development company that offers development and publishing solutions from concept, development to app discovery. We have worked on diverse projects with a global customer base.
                        </p>
                        <p>
                            Offering over <span className="text-customYellow"> 50 million</span> global user base and years of experience across all major platforms including iOS, Android, Amazon, Facebook, Web & PC etc. We are a trusted partner for top tier mobile studios from around the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}