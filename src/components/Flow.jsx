import { motion } from "framer-motion";

export default function Flow() {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const spin = {
    visible: {
      rotate: 360,
      scale: 1,
      opacity: 1,
      transition: { delay: 1 },
    },
    hidden: { rotate: 0, scale: 0, opacity: 0 },
  };

  return (
    <section className="py-20">
      <motion.div
        whileInView={{
          opacity: [0, 0.5, 1],
          y: [50, -50, 0],
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-8"
      >
        <i className="ri-flow-chart ri-2x text-[#94D7A2]"></i>
        <h2 className="font-karla font-bold leading-tight text-4xl">
          Quizap{" "}
          <span className="underline decoration-wavy decoration-[#94D7A2] decoration-2">
            Flow
          </span>
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={[variants, spin]}
        transition={{
          type: "spring",
          duration: 1,
          delayChildren: 0.5,
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="flex md:flex-row flex-col justify-center items-center sm:p-0 p-4"
      >
        <motion.a variants={variants} href="#amount">
          <div className="shadow-xl hover:outline bg-[#dde6f8] md:-skew-x-3 outline-[#4d5b9e] outline-offset-4 outline-1 rounded-lg flex flex-col items-center space-y-5 px-5 py-8">
            <i className="ri-file-list-3-fill ri-3x text-[#4D5B9E]"></i>
            <h3 className="font-karla font-medium text-lg">Choose Amount</h3>
            <p className="font-thin text-sm md:w-full w-3/5 break-words text-center">
              Choose the number of questions you want in the quiz you'll take.
            </p>
          </div>
        </motion.a>
        <motion.i
          variants={spin}
          className="ri-arrow-right-fill ri-2x text-[#4D5B9E] md:block hidden"
        ></motion.i>
        <motion.i
          variants={spin}
          className="ri-arrow-down-fill ri-2x text-[#4D5B9E] md:hidden block"
        ></motion.i>
        <motion.a variants={variants} href="#category">
          <div className="shadow-xl hover:outline bg-[#dde6f8] outline-[#4d5b9e] outline-offset-4 outline-1 rounded-lg flex flex-col items-center space-y-5 px-5 py-8">
            <i className="ri-focus-3-fill ri-3x text-[#94D7A2]"></i>
            <h3 className="font-karla font-medium text-lg">Pick Category</h3>
            <p className="font-thin text-sm md:w-full w-3/5 break-words text-center">
              Pick the area you want your quiz questions to center on.
            </p>
          </div>
        </motion.a>
        <motion.i
          variants={spin}
          className="ri-arrow-right-fill ri-2x text-[#4D5B9E] md:block hidden"
        ></motion.i>
        <motion.i
          variants={spin}
          className="ri-arrow-down-fill ri-2x text-[#4D5B9E] md:hidden block"
        ></motion.i>
        <motion.a variants={variants} href="#difficulty">
          <div className="shadow-xl hover:outline bg-[#dde6f8] md:skew-x-3 outline-[#4d5b9e] outline-offset-4 outline-1 rounded-lg flex flex-col items-center space-y-5 px-5 py-8">
            <i className="ri-fire-fill ri-3x text-[#F8BCBC]"></i>
            <h3 className="font-karla font-medium text-lg">
              Choose Difficulty
            </h3>
            <p className="font-thin text-sm md:w-full w-3/5 break-words text-center">
              There's{" "}
              <span className="underline decoration-wavy decoration-[#94D7A2]">
                Easy
              </span>
              ,{" "}
              <span className="underline decoration-wavy decoration-yellow-500">
                Medium
              </span>
              , and{" "}
              <span className="underline decoration-wavy decoration-red-500">
                Hard
              </span>
              . Make your choice.
            </p>
          </div>
        </motion.a>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={[variants, spin]}
        transition={{
          type: "spring",
          duration: 1,
          delayChildren: 0.5,
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center space-y-2 mt-3"
      >
        <motion.i
          variants={spin}
          className="ri-arrow-down-fill ri-2x text-[#4D5B9E]"
        ></motion.i>
        <div className="flex items-center space-x-2">
          <motion.span
            variants={variants}
            className="text-white text-base font-bold bg-[#94D7A2] p-2 rounded"
          >
            Confirm
          </motion.span>
          <motion.i
            variants={spin}
            className="ri-arrow-right-fill ri-2x text-[#4D5B9E]"
          ></motion.i>
          <motion.span
            variants={variants}
            className="text-white text-base font-bold bg-[#4D5B9E] p-2 rounded"
          >
            Start Quiz
          </motion.span>
        </div>
        <motion.i
          animate={{ rotateZ: 360 }}
          transition={{
            duration: 1,
            ease: [1, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 2,
            repeatType: "loop",
          }}
          variants={spin}
          className="ri-recycle-fill ri-2x text-[#4D5B9E]"
        ></motion.i>
      </motion.div>
    </section>
  );
}
