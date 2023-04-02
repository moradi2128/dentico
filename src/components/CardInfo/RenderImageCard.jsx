import Image from 'next/image'
import React from 'react'

const RenderImageCard = ({ img }) => {
    return <div className={`relative h-[400px] w-full overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem]`}>
        <Image src={img} layout="fill" objectFit='cover' className='transition-all group-hover:scale-105' alt="" />
    </div>
}

export default RenderImageCard