import React from 'react'

export const Screen08 = () => {
    return (
        <section className="flex bg-page08-gradient bg-no-repeat bg-cover items-center">
            <div className="max-w-7xl md:pb-40 ~px-4/8 mx-auto flex flex-col items-center w-full">
                <h1 className='text-center text-8xl w-full font-bold pt-16'>OUR TEAM</h1>
                <div className='flex items-center justify-evenly gap-16 w-full'>
                    <div className='flex flex-col items-center gap-10 pt-52'>
                        <div className='w-32 h-32 rounded-full bg-white'></div>
                        <div className='text-center'>
                            <h1 className='text-[#FFD258] text-3xl'>
                                DR. MIAN MUHAMMAD MUBASHIR
                            </h1>
                            <p className='text-xl'>
                                CEO & FOUNDER
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10 pt-52'>
                        <div className='w-32 h-32 rounded-full bg-white'></div>
                        <div className='text-center'>
                            <h1 className='text-[#FFD258] text-3xl'>
                                MUHAMMAD fURQAAN
                            </h1>
                            <p className='text-xl'>
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