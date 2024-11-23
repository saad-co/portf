export default function Header() {
    return (
        <nav className="absolute top-0 left-0 right-0 bg-transparent">
            <div className="max-w-7xl mx-auto flex items-center justify-between pt-12">
                <div className="flex items-center gap-2">
                    <p className="bg-white rounded-full w-7 h-7"></p>
                    <p>Your Logo</p>
                </div>
                <div className="flex items-center gap-36 ">
                    <div className="flex items-center gap-14 text-[16px] font-light">
                        <p className="cursor-pointer text-customYellow">HOME</p>
                        <p className="cursor-pointer">ABOUT US</p>
                        <p className="cursor-pointer">SERVICES</p>
                        <p className="cursor-pointer">TECHNOLOGIES</p>
                        <p className="cursor-pointer">BLOGS</p>
                    </div>
                    <div>
                        <button className="bg-white text-black font-bold text-sm px-12 py-3 rounded-[41px]">CONTACT US</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}