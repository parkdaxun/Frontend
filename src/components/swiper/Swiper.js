import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Keyboard, EffectCoverflow, EffectFade, Autoplay, Navigation } from "swiper";

export default function App() {
    return (
        <div className="max-swiper">
            <div className="swipe-con">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    effect={"coverflow"}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[Keyboard, EffectCoverflow, EffectFade, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="top1.png" alt="1" />
                        <div className="titles">남자 아이돌<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top2.png" alt="2" />
                        <div className="titles">여자 아이돌<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top3.png" alt="3" />
                        <div className="titles">남자 배우<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top4.png" alt="4" />
                        <div className="titles">애니<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top5.png" alt="5" />
                        <div className="titles">2021 라면<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top6.png" alt="6" />
                        <div className="titles">신(新) 음식<br />월드컵</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="top7.png" alt="7" />
                        <div className="titles">여자 배우<br />월드컵</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
