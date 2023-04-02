import Image from 'next/image'
import React from 'react'
import { usePageContext } from 'src/context/page'
import BannerSvg from '../BannerSvg/BannerSvg';

const Cover = ({ children, background, alt = "", hasParallax = false }) => {
    const { featuredImage } = usePageContext()
    return (
        <div className="text-white min-h-[600px] relative flex justify-center items-center z-10">
            {(background || featuredImage) &&
                <Image alt={alt} src={background || featuredImage} layout="fill" objectFit='cover' className='mix-blend-soft-light' />
            }
            <BannerSvg />
            <div className='container z-10'>{children}</div>
        </div>
    )
}

export default Cover
