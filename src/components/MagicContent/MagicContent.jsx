import Image from 'next/image'
import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'

const MagicContent = ({ attributes }) => {
    const {
        imgURL, imgAlt,
        headerTitle, headerTagOption, headertitleColor, titleFontSize, titlePaddingBottom,
        headerSubTitle, headersubtitleColor, subTitleFontSize, subtitlePaddingTop,
        align,
        buttonText, buttonUrl,
        buttonTarget
    } = attributes
    const HeaderCustomtag = `${headerTagOption}`
    return (
        <div className={`relative mx-auto max-w-4xl px-10 my-20 `}>
            {/* === Image === */}
            <div className='relative w-full min-h-[500px] shadow-2xl '>
                <Image
                    src={imgURL}
                    layout="fill"
                    alt={imgAlt} />
            </div>
            {/* === box content === */}
            <div className={`backdrop-blur-lg border border-gray-300/50 h-auto min-w-[350px] absolute left-[15%] md:-left-0 -top-12 md:-top-10 shadow-custom p-7 card-rounded text-${align} `}>
                {/* === header === */}
                <HeaderCustomtag
                    className={`py-${titlePaddingBottom}`}
                    style={{ color: headertitleColor, fontSize: titleFontSize + "px" }}
                >{headerTitle}</HeaderCustomtag>
                <div className='divider px-9'></div>
                {/* === sub Title === */}
                <div
                    className={`py-${subtitlePaddingTop} mb-5`}
                    style={{ color: headersubtitleColor, fontSize: subTitleFontSize + "px" }}
                    dangerouslySetInnerHTML={{ __html: headerSubTitle }}
                />
                {!buttonTarget && <ButtonLink label={buttonText} destination={buttonUrl} />}
            </div>
        </div>
    )
}

export default MagicContent