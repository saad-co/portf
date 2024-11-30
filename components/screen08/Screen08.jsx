import React from 'react'

export const Screen08 = () => {
    return (
        <section className="flex bg-page08-gradient bg-no-repeat bg-cover items-center">
            <div className="max-w-7xl md:pb-40 ~px-4/8 mx-auto flex flex-col items-center w-full">
                <h1 className='text-center ~text-5xl/8xl w-full font-bold ~pt-7/16'>OUR TEAM</h1>
                <div className='flex flex-col pb-10 md:flex-row items-center justify-evenly md:gap-16 gap-0 w-full'>
                    <div className='flex flex-col items-center gap-10 ~pt-20/52'>
                        <div className='w-32 h-32 rounded-full bg-white'></div>
                        <div className='text-center'>
                            <h1 className='text-[#FFD258] '>
                                DR. MIAN MUHAMMAD MUBASHIR
                            </h1>
                            <p className='~text-base/xl'>
                                CEO & FOUNDER
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10 ~pt-20/52'>
                        <div className='w-32 h-32 rounded-full bg-white'></div>
                        <div className='text-center'>
                            <h1 className='text-[#FFD258] ~text-2xl/3xl'>
                                MUHAMMAD fURQAAN
                            </h1>
                            <p className='~text-base/xl'>
                                TECHNICAL LWAD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Screen08;