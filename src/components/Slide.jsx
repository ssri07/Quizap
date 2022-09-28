// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube } from "swiper";

export default function Slide() {
  return (
    <div className="sm:mt-0 mt-6">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Autoplay, EffectCube]}
        className="mySwiper md:w-96 w-72"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="src/assets/brain.png"
            alt="Classic Brain"
            className="w-full block"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
