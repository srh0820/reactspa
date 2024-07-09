import React from 'react'
import datainfo from './data/db.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true
        }}
        loop={true}
        >
            {
                datainfo.banner.map((v, i) => {
                    return (
                        <SwiperSlide key={i} className={v.cls}>{v.atext}</SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Banner