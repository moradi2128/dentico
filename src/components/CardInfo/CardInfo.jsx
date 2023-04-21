import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CardItemVertical from './CardItemVertical';
import CardItemHorizontal from './CardItemHorizontal';
const CardInfo = ({ content }) => {
    const { cards, layout = "vertical", columns, columnGap, descColor, contentAlign = "right", btnAlign } = content;

    return (
        <div className='relative container'>
            {layout === "vertical" && <div className='md:hidden absolute left-0 top-0 bottom-0 w-[50%]  bg-gradient-to-r from-white/90  z-10' />}
            <Swiper
                // loop={true}
                className='py-10 px-7 container'
                spaceBetween={parseInt(columnGap, 10)}
                slidesPerView={1.2}
                breakpoints={{
                    480: {
                        slidesPerView: columns?.mobile || 1,
                    },
                    768: {
                        slidesPerView: columns?.tablet || 3,
                    },
                    1024: {
                        slidesPerView: columns?.desktop || 4,
                    },
                }}
            >
                {(cards || []).map((card, i) => {
                    // === render Layout "vertical"
                    if (layout === "vertical") {
                        return <SwiperSlide key={i} >
                            <CardItemVertical
                                contentCard={card}
                                descColor={descColor}
                                contentAlign={contentAlign}
                                btnAlign={btnAlign}
                            />
                        </SwiperSlide>
                    }
                    // === render Layout "horizontal"
                    return <SwiperSlide key={i} className="w-full">
                        <CardItemHorizontal
                            contentCard={card}
                            descColor={descColor}
                            contentAlign={contentAlign}
                            btnAlign={btnAlign}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default CardInfo