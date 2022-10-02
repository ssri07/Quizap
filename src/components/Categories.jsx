import { motion } from "framer-motion";

export default function Categories() {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section className="py20">
      <div className="shapedividers_com-cat h-40"></div>
      <div className="bg-[#dde6f8] py-20">
        <motion.div
          whileInView={{
            opacity: [0, 0.5, 1],
            y: [50, -50, 0],
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex sm:flex-row flex-col items-center justify-center mb-2"
        >
          <i className="ri-focus-3-fill ri-3x text-[#94D7A2] sm:-mr-[2.26rem]"></i>{" "}
          <h2 className="font-karla font-bold leading-tight text-center text-4xl z-10">
            Quizap Categories
          </h2>
        </motion.div>
        <motion.p
          whileInView={{
            opacity: [0, 0.5, 1],
            y: [50, -50, 0],
            transition: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="font-inter font-normal text-base leading-tight text-center my-8 sm:px-0 px-4"
        >
          Quizzical lets you choose the area/field you want your quiz questions
          centered on. <br /> Here are some of the Categories available.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{
            type: "spring",
            duration: 1,
            delayChildren: 0.5,
            staggerChildren: 0.05,
          }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-4 gap-5 text-center justify-center"
        >
          <motion.div
            variants={variants}
            className="sm:col-auto col-span-2 flex flex-col items-center justify-center space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white w-40 h-40 rounded mx-auto"
          >
            <a href="#category" className="w-fit">
              <i className="ri-book-3-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#10b981]"></i>
            </a>
            <h3 className="font-inter font-medium text-base">
              General <br />
              Knowledge
            </h3>
          </motion.div>
          <motion.div
            variants={variants}
            className="sm:col-auto col-span-2 flex flex-col items-center justify-center space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white w-40 h-40 rounded mx-auto"
          >
            <a href="#category" className="w-fit">
              <i className="ri-parentheses-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#10b981]"></i>
            </a>
            <h3 className="font-inter font-medium text-base">Science</h3>
          </motion.div>
          <motion.div
            variants={variants}
            className="sm:col-start-auto sm:col-end-auto col-start-2 col-end-4 flex flex-col items-center justify-center space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white w-40 h-40 rounded-full mx-auto"
          >
            <a href="#category" className="w-fit">
              <i className="ri-football-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#10b981]"></i>
            </a>
            <h3 className="font-inter font-medium text-base">Sports</h3>
          </motion.div>
          <motion.div
            variants={variants}
            className="sm:col-auto col-span-2 flex flex-col items-center justify-center space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white w-40 h-40 rounded mx-auto"
          >
            <a href="#category" className="w-fit">
              <i className="ri-landscape-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#10b981]"></i>
            </a>
            <h3 className="font-inter font-medium text-base">Entertainment</h3>
          </motion.div>
          <motion.div
            variants={variants}
            className="sm:col-auto col-span-2 flex flex-col items-center justify-center space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white w-40 h-40 rounded mx-auto"
          >
            <a href="#category" className="w-fit">
              <i className="ri-history-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#10b981]"></i>
            </a>
            <h3 className="font-inter font-medium text-base">History</h3>
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-8">
          <motion.a
            whileInView={{
              opacity: [0, 0.5, 1],
              y: [50, -10, 0],
              transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            href="#category"
            className="w-fit flex items-center font-medium text-base leading-4 border border-solid border-[#4D5B9E] p-3 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
          >
            View More
            <i className="ri-arrow-right-s-line ri-lg text-[#4D5B9E]"></i>
          </motion.a>
        </div>
      </div>
      <div className="shapedividers_com-catg h-40"></div>
    </section>
  );
}
