import { motion } from "framer-motion";

export default function StartNav() {
  return (
    <nav className="p-5 flex justify-between bg-[#dde6f8]">
      <motion.a
        animate={{ x: [null, 10, 0] }}
        transition={{
          duration: 3,
          ease: [1, 0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "reverse",
        }}
        href="#"
        className="flex items-center cursor-pointer"
      >
        <div className="w-12 h-12 rounded-full bg-[#94D7A2] text-[#94D7A2] animate-pulse motion-reduce:animate-pulse"></div>
        <span className="font-rubik text-3xl leading-tight tracking-wide -ml-10 z-10">
          Quizap
        </span>
        <i className="ri-check-double-line ri-3x -ml-5 text-[#94D7A2] animate-pulse motion-reduce:animate-pulse"></i>
      </motion.a>
      <motion.div
        animate={{ x: [null, -10, 0] }}
        transition={{
          duration: 3,
          ease: [1, 0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "reverse",
        }}
        className="flex items-center"
      >
        <i className="ri-checkbox-circle-fill ri-2x text-[#94D7A2] z-10"></i>
        <i className="ri-close-circle-fill ri-2x text-[#F8BCBC] -ml-3"></i>
      </motion.div>
    </nav>
  );
}
