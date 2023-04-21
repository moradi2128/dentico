import Image from 'next/image';
import React from 'react'
import { theme } from 'theme';
import CallToActionButton from '../CallToActionButton/CallToActionButton';
import RenderImageCard from './RenderImageCard';

const CardItemVertical = ({ contentCard, descColor, contentAlign }) => {
    const { background, btnLabal, btnUrl, desc, img, title, titleColor = theme.primary, btnAlign = "right" } = contentCard;

    return <div
        className={`max-w-[350px] mx-auto group rounded-3xl overflow-hidden mb-11 transition-all shadow-2xl p-3`}
        style={{ backgroundColor: background.color }}
    >
        {/* === Image === */}
        <div className={`min-h-[250px] relative overflow-hidden rounded-2xl mb-5 shadow-inner`}>
            <Image src={img} layout="fill" objectFit='cover' className='transition-all group-hover:scale-105' alt="" />
            {/* <div className='bg-gradient-to-t from-primary/30 to-secondary/10 absolute inset-0 transition-all group-hover:bg-transparent ' /> */}
        </div>

        {/*  === Body === */}
        <div className={` text-[${contentAlign}]`}>
            <div className='w-full'>
                {/* === Title === */}
                <h2 className={`card-titld text-2xl mb-3 text-[${titleColor}]`}>{title}</h2>
                {/* == desciption === */}
                <p className={`mb-3 text-sm text-[${descColor}] `}>{desc}</p>
                {/* === Button === */}
                {btnLabal !== "" &&
                    <div className='transition-all opacity-100 group-hover:opacity-100'>
                        <CallToActionButton
                            buttonLabel={btnLabal}
                            destination={btnUrl}
                            align="center"
                            className="w-full "
                        />
                    </div>
                }
            </div>
        </div>

    </div >
}

export default CardItemVertical