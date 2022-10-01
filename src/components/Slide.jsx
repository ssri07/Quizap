import { motion } from "framer-motion";
import classicBrain from "../assets/brain.png";
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
    <motion.div
      animate={{
        x: [50, 100, 100, -20, 0],
        scale: [0.6, 0.8, 1, 1.05, 1],
        opacity: [0.4, 0.6, 0.6, 0.8, 1],
      }}
      transition={{ duration: 0.8 }}
      className="sm:mt-0 mt-6"
    >
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
            src={classicBrain}
            alt="Classic Brain"
            className="w-full block"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
