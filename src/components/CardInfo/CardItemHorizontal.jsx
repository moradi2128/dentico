import { relativeToAbsoluteUrls } from '@/src/utils/relativeToAbsoluteUrls';
import React from 'react'
import { theme } from 'theme';
import CallToActionButton from '../CallToActionButton/CallToActionButton';
import Paragraph from '../Paragraph/Paragraph';
import RenderImageCard from './RenderImageCard';

const CardItemHorizontal = ({ contentCard, descColor, contentAlign, }) => {
    const { btnLabal, btnUrl, desc, img, title, titleColor = theme.primary, btnAlign = "right" } = contentCard;
    return <div className={`grid grid-cols-3 gap-4 min-h-[320px] mx-auto `} >

        {/*  === Body === */}
        <div className={`col-span-2 px-6  pb-6 text-[${contentAlign}]`}>
            {/* === Title === */}
            <h2
                className={`card-titld text-3xl mb-3 `}
                style={{ color: titleColor }}
            >
                {title}
            </h2>
            {/* == desciption === */}
            <Paragraph content={desc} textColor={descColor} textAlign="justify" className="line-clamp-[8]" />
            {/* === Button === */}
            {btnLabal !== "" && <CallToActionButton buttonLabel={btnLabal} destination={relativeToAbsoluteUrls(btnUrl)} align={btnAlign} />}
        </div>
        {/* === Image === */}
        {img && <RenderImageCard img={img} />
        }
    </div >
}

export default CardItemHorizontal