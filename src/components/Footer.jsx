import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#dde6f8] w-full">
      <div className="flex justify-center items-center space-x-8">
        <motion.a
          animate={{ x: [null, 10, 0] }}
          transition={{
            duration: 3,
            ease: [1, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse",
          }}
          href="#nav"
          className="flex items-center cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#94D7A2] text-[#94D7A2] animate-pulse motion-reduce:animate-pulse"></div>
          <span className="font-rubik text-2xl leading-tight tracking-wide -ml-6 z-10">
            Quizap
          </span>
          <i className="ri-check-double-line ri-3x -ml-5 text-[#94D7A2] animate-pulse motion-reduce:animate-pulse"></i>
        </motion.a>
        <p className="font-inter font-normal text-base text-center leading-4">
          Built with 💪🏻 by Abdul
        </p>
      </div>
    </footer>
  );
}
