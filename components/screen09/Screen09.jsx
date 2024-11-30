'use client'
import React, { useState } from 'react'

export const Screen09 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    function inputChangeHandler(e) {
        const { name, value } = e.target; // Destructure name and value from the event
        setFormData((prevState) => ({
            ...prevState, // Keep the previous state
            [name]: value, // Update the field corresponding to the input's name
        }));
    }

    return (
        <section className="flex flex-col bg-page03-gradient items-center ">
            <div className="max-w-7xl ~px-4/8 pb-20 ~gap-8/16 flex flex-col justify-center items-center w-full">
                <div className='flex flex-col w-full mx-auto pt-20 gap-4'>
                    <h1 className='w-full text-center ~text-3xl/7xl font-bold'>
                        GET IN TOUCH
                    </h1>
                    <p className='w-full text-center ~text-base/3xl text-customYellow'>
                        Interesting Ideas and Proposals? Write to Us!
                    </p>
                </div>
                <div className='w-full'>
                    <form>
                        <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-14 pb-16'>
                            <div className='flex flex-col relative'>
                                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={inputChangeHandler}
                                    className="px-8 py-4 rounded-2xl w-full text-sm bg-transparent border border-customYellow"
                                />
                            </div>
                            <div className='flex flex-col relative'>
                                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={inputChangeHandler}
                                    className="px-8 py-4 rounded-2xl w-full text-sm bg-transparent border border-customYellow"
                                />
                            </div>
                            <div className='flex flex-col relative'>
                                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                                    PHONE
                                </label>
                                <input
                                    type="phone"
                                    name='phone'
                                    value={formData.phone}
                                    onChange={inputChangeHandler}
                                    className="px-8 py-4 rounded-2xl w-full text-sm bg-transparent border border-customYellow"
                                />
                            </div>
                            <div className='flex flex-col relative'>
                                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    name='subject'
                                    value={formData.subject}
                                    onChange={inputChangeHandler}
                                    className="px-8 py-4 rounded-2xl w-full text-sm bg-transparent border border-customYellow"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col relative w-full'>
                            <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                                MESSAGE
                            </label>
                            <textarea
                                type="textarea"
                                name='message'
                                value={formData.message}
                                rows={10}
                                onChange={inputChangeHandler}
                                className="px-8 py-4 rounded-2xl w-full text-sm bg-transparent border border-customYellow"
                            />
                        </div>
                    </form>
                    <div className='w-full mx-auto pt-20 flex justify-center items-center'>
                        <div className="bg-gold-gradient w-fit py-1 px-2 rounded-[47px]">
                            <button className="bg-custom-gradient px-6 py-3 rounded-[47px]">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Screen09;
