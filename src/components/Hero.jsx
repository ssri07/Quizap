import { motion } from "framer-motion";
import Slide from "./Slide";

export default function Hero() {
  const variants = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: -300, scale: 0 },
    x: [50, 100, 100, -20, 0],
    scale: [0.6, 0.8, 1, 1.05, 1],
    opacity: [0.4, 0.6, 0.6, 0.8, 1],
  };

  return (
    <section className="hero shapedividers_com-hero py-12">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            type: "spring",
            bounce: 1,
            duration: 0.8,
            delayChildren: 0.5,
            staggerChildren: 0.1,
          }}
          className="flex flex-col space-y-5 sm:px-0 px-5 md:w-1/2 z-10"
        >
          <div>
            <motion.p
              variants={variants}
              className="font-inter font-thin test-base"
            >
              Put your brain to the test.
            </motion.p>
            <motion.h1
              variants={variants}
              className="font-karla font-extrabold lg:text-6xl text-5xl break-words leading-tight"
            >
              <span className="underline decoration-wavy hover:decoration-double decoration-[#94D7A2]">
                Sharpen
              </span>{" "}
              your mind today!
            </motion.h1>
          </div>
          <motion.p
            variants={variants}
            className="font-inter font-medium test-lg break-words"
          >
            The best place to take an online quiz that's fun. Take a quiz now!
          </motion.p>
        </motion.div>
        <Slide />
      </div>
    </section>
  );
}
