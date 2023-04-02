import React from 'react'
import { theme } from 'theme';
import CallToActionButton from '../CallToActionButton/CallToActionButton';
import RenderImageCard from './RenderImageCard';

const CardItemVertical = ({ contentCard, descColor, contentAlign }) => {
    const { background, btnLabal, btnUrl, desc, img, title, titleColor = theme.primary, btnAlign = "right" } = contentCard;

    return <div
        className={`min-h-[450px] max-w-[350px] mx-auto group  hover:shadow-xl rounded-tl-[2.5rem] rounded-br-[2.5rem] mb-11 transition-all`}
        style={{ backgroundColor: background.color }}
    >
        {/* === Image === */}
        {img && <RenderImageCard img={img} />
        }
        {/*  === Body === */}
        <div className={`px-6 pt-5 pb-6 text-[${contentAlign}]`}>
            {/* === Title === */}
            <h2 className={`card-titld text-2xl mb-3 text-[${titleColor}]`}>{title}</h2>
            {/* == desciption === */}
            <p className={`mb-3 text-[${descColor}] `}>{desc}</p>
            {/* === Button === */}
            {btnLabal !== "" &&
                <div className='transition-all opacity-0 group-hover:opacity-100'>
                    <CallToActionButton
                        buttonLabel={btnLabal}
                        destination={btnUrl}
                        align={btnAlign}
                        className="w-full"
                    />
                </div>
            }
        </div>

    </div >
}

export default CardItemVertical