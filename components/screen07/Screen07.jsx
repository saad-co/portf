import React from 'react'
import { firCard, secCard, thirdCard } from '@/assets/images'
import CardComp from './CardComp'

const jsonData = [
    {
        imgSrc: firCard,
        title: "How AI is Changing the Gaming World",
        short: "AI in Gaming: A New Era",
        desc: "Artificial Intelligence (AI) is transforming the gaming industry. With massive investments and exciting innovations, AI is now a game-changer for creating smarter and more interactive experiences.The AI Gamechangers Newsletter is your go- to source for exploring how AI is shaping mobile games, consoles, XR, and beyond.",
        btnText01: "GameDevelopment",
        btnText02: "GamingTrends"
    },
    {
        imgSrc: secCard,
        title: "The Evolution of Multiplayer Gaming",
        short: "🕹️ The Evolution of Multiplayer Gaming",
        desc: "Multiplayer gaming has come a long way, from LAN parties to massive online battles. Explore how networking technology and player interaction mechanics have shaped today’s competitive and cooperative games.",
        btnText01: "Multiplayergaming",
        btnText02: "COMPETITONS"
    },
    {
        imgSrc: thirdCard,
        title: "Mobile Gaming: A Billion-Dollar Industry",
        short: "📱 Why Mobile Gaming is Booming",
        desc: "Mobile gaming has revolutionized the entertainment industry, growing from simple puzzles to immersive, graphically rich experiences. Today, it’s a billion-dollar market, outpacing console and PC gaming combined in revenue. With accessibility and innovation at its core, mobile gaming dominates the gaming world.",
        btnText01: "Billiondollarindustry",
        btnText02: "Mobilegaming"
    }

]

export const Screen07 = () => {
    return (
        <section className="flex flex-col bg-[#1E1E1E] items-center ">
            <div className="max-w-7xl ~px-4/8 pb-20 ~gap-8/16 mx-auto flex flex-col justify-center items-center w-full">
                <h1 className='font-bold text-center md:text-start ~text-5xl/8xl text-customYellow ~pt-10/24'>
                    <span className='font-normal text-[#BE030C]'>LATEST</span> BLOGS
                </h1>
                <div className=" flex flex-col gap-9">
                    {jsonData.map((data, index) => (
                        <CardComp key={index} {...data} />
                    ))}
                </div>
                <div className='border-black border w-full'></div>
            </div>
        </section>
    )
}

export default Screen07;