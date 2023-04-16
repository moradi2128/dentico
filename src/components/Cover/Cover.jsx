import Image from 'next/image'
import React from 'react'
import { usePageContext } from 'src/context/page'
import BannerSvg from '../BannerSvg/BannerSvg';

const Cover = ({ children, background, alt = "", hasParallax = false }) => {
    const { featuredImage } = usePageContext()
    return (
        <div className="text-white min-h-[600px] relative flex justify-center items-center z-10">
            {!background && <div className='absolute inset-0 blur-xl bg-gradient-to-t from-primary/0 to-secondary/10 overflow-hidden'>
                <div className='absolute bg-secondary/20 w-[100px] h-[100px] rounded-full top-10 right-10' />
                <div className='absolute bg-secondary/30 w-[90px] h-[90px] rounded-full bottom-10 right-56' />
                <div className='absolute bg-secondary/20 w-[100px] h-[100px] rounded-full -top-5 left-20' />
                <div className='absolute bg-secondary/10 w-[100px] h-[100px] rounded-full top-40 left-44' />
            </div>}


            {(background || featuredImage) &&
                <Image alt={alt} src={background || featuredImage} layout="fill" objectFit='cover' className='mix-blend-soft-light' />
            }
            <BannerSvg />
            <div className='container z-10'>{children}</div>
        </div>
    )
}

export default Cover
