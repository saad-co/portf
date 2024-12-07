import React from 'react'
import { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12 } from '@/assets/images';
import Image from 'next/image';
export const Screen04 = () => {
    return (
        <section id='technologies' className="flex bg-[#190202] items-center">
            <div className="max-w-7xl ~px-4/8 mx-auto flex flex-col items-center sm:flex-row sm:justify-between w-full">
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3 gap-6 pt-28 md:pt-48 pb-16">
                    <h1 className="text-customYellow w-full ~text-3xl/7xl text-center md:text-start">OUR</h1>
                    <h1 className="text-[#B7020B] ~text-2xl/5xl">TECHNOLOGIES</h1>
                    <p className="~text-base/2xl text-center md:text-start">
                        Wondering what it’s like to bring your gaming vision to life with us? Hear directly from our amazing clients who’ve partnered with us to create unforgettable gaming experiences!
                    </p>
                </div>
                <div className="flex items-center px-10 md:px-0 ~gap-6/14 justify-evenly pt-20 h-[450px] overflow-hidden">
                    <div className="flex flex-col items-center gap-7 animate-scroll">
                        <Image
                            src={i1}
                            alt="i1"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i2}
                            alt="i2"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i3}
                            alt="i3"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i4}
                            alt="i4"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i1}
                            alt="i1"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i2}
                            alt="i2"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i3}
                            alt="i3"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i4}
                            alt="i4"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                    </div>
                    <div className='pt-20'>
                        <div className="flex flex-col items-center gap-7 animate-scroll">
                            <Image
                                src={i5}
                                alt="i1"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i6}
                                alt="i2"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i7}
                                alt="i3"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i8}
                                alt="i4"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i5}
                                alt="i1"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i6}
                                alt="i2"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i7}
                                alt="i3"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                            <Image
                                src={i8}
                                alt="i4"
                                width={200}
                                height={146}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-7 animate-scroll">
                        <Image
                            src={i9}
                            alt="i1"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i10}
                            alt="i2"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i11}
                            alt="i3"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i12}
                            alt="i4"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i9}
                            alt="i1"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i10}
                            alt="i2"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i11}
                            alt="i3"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                        <Image
                            src={i12}
                            alt="i4"
                            width={200}
                            height={146}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Screen04;