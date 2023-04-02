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
        <Swiper
            // loop={true}
            className='mb-9 container'
            spaceBetween={parseInt(columnGap, 10)}
            slidesPerView={1.4}
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
                return <SwiperSlide key={i} >
                    <CardItemHorizontal
                        contentCard={card}
                        descColor={descColor}
                        contentAlign={contentAlign}
                        btnAlign={btnAlign}
                    />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default CardInfo