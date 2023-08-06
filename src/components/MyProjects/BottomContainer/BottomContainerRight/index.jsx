import React, {useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './index.css';

import krvvkoMe from './../../../../media/png/krvvko-me.png';
import krvvkoMeBlack from './../../../../media/png/krvvko-me-black.png';
import webFetcher from './../../../../media/png/webfetcher.png';
import {Autoplay, EffectFade} from "swiper/modules";
import links from "../../../../links";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const BottomContainerRight = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 700,
    //     });
    // }, [])

    const swiperRef = useRef(null);
    return (
        <div className='bottom-container-right' data-aos-delay="100" data-aos="fade-up">
            <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                effect="fade"
                modules={[Autoplay, EffectFade]}
                className="project-swiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide-img-container">
                        <img className="swiper-slide-img" src={krvvkoMe} alt="krvvko.me"/>
                    </div>
                    <div className="swiper-slide-nav">
                        <span className="headline">krvvko.me - Rhodochrosite</span>
                        <div className="swiper-slide-nav-btns">
                            <a href={links.krvvkoRhodochrositeGH}>GitHub</a>
                            <a href={links.krvvkoRhodochrosite}>Web</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-img-container">
                        <img className="swiper-slide-img" src={krvvkoMeBlack} alt="krvvko.me"/>
                    </div>
                    <div className="swiper-slide-nav">
                        <span className="headline">krvvko.me - black rog</span>
                        <div className="swiper-slide-nav-btns">
                            <a href={links.krvvkoBlackRogGH}>GitHub</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide-img-container">
                        <img className="swiper-slide-img" src={webFetcher} alt="krvvko.me"/>
                    </div>
                    <div className="swiper-slide-nav">
                        <span className="headline">WebFetcher</span>
                        <div className="swiper-slide-nav-btns">
                            <a href={links.webFetcher}>Web</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-bottom">
                <span className="headline">My Projects</span>
                <div className="swiper-buttons-container">
                    <button className="swiper-button" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <i className="swiper-button-icon left"></i>
                    </button>
                    <button className="swiper-button" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <i className="swiper-button-icon right"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BottomContainerRight;