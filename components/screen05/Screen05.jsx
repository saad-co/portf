'use client'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Screen05 = () => {
    const sectionRef = useRef(null);
    const numberRefs = useRef([]);

    useGSAP(() => {
        numberRefs.current.forEach((el) => {
            const targetValue = parseInt(el.getAttribute("data-target"), 10);

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: targetValue,
                    duration: 1,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    },
                    onUpdate: function () {
                        el.innerText = Math.round(this.targets()[0].innerText);
                    },
                }
            );
        });
    }, sectionRef);

    return (
        <section
            ref={sectionRef}
            className="flex bg-s5 bg-no-repeat bg-cover items-center"
        >
            <div className="max-w-7xl font-extrabold ~px-4/44 mx-auto flex flex-col gap-10 md:gap-0  md:flex-row items-center justify-between w-full py-28">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1
                        ref={(el) => (numberRefs.current[0] = el)}
                        data-target="30"
                        className="text-customYellow text-8xl"
                    >
                        0
                    </h1>
                    <p className="text-2xl">PROFESSIONALS</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1
                        ref={(el) => (numberRefs.current[1] = el)}
                        data-target="6"
                        className="text-customYellow text-8xl"
                    >
                        0
                    </h1>
                    <p className="text-2xl">PROJECTS DELIVERED</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1
                        ref={(el) => (numberRefs.current[2] = el)}
                        data-target="5"
                        className="text-customYellow text-8xl"
                    >
                        0
                    </h1>
                    <p className="text-2xl">CONSULTATION</p>
                </div>
            </div>
        </section>
    );
};

export default Screen05;
