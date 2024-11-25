import React from 'react'
import Image from 'next/image';

export const Screen04BoxComp = ({ imgSrc }) => {
    return (
        <div>
            <Image
                src={imgSrc}
                alt="Screen04BoxComp"
                width={240}
                height={240}
                className="rounded-xl object-cover w-full h-auto"
            />
        </div>
    )
}

export default Screen04BoxComp;