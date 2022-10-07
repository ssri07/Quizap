import { motion } from "framer-motion";
import Questions from "./Questions";
import Footer from "./Footer";

export default function Quiz({
  api,
  quizNull,
  quizObject,
  toggleIsPicked,
  updatePlayersAnswers,
  gradePlayer,
  score,
  error,
  quizzical,
  playAgain,
  goBack,
}) {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  function questionElement() {
    return quizObject.map((question, i) => (
      <Questions
        key={question.id}
        {...question}
        no={i + 1}
        pick={toggleIsPicked}
        update={updatePlayersAnswers}
        quizzical={quizzical}
        variants={variants}
      />
    ));
  }

  return (
    <section className="quiz container bg-[#f0f4fc] m-auto h-screen shadow-2xl select-none">
      <div className="h-full">
        <div className="bg-[#dde6f8] font-karla h-[5%] flex items-center justify-end space-x-5 sm:py-3 py-6 sm:px-8 px-4 border-b border-[#dde6f8] shadow-2xl">
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <span className="font-inter underline decoration-wavy decoration-[#94D7A2]">
              Amount:
            </span>{" "}
            {api.amount}.
          </span>
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <span className="font-inter underline decoration-wavy decoration-[#94D7A2]">
              Category:
            </span>{" "}
            {api.categoryLabel}.
          </span>
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <span className="font-inter underline decoration-wavy decoration-[#94D7A2]">
              Difficulty:
            </span>{" "}
            {api.difficulty.charAt(0).toUpperCase() + api.difficulty.slice(1)}.
          </span>
        </div>
        {!quizNull ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.5,
              delayChildren: 0.3,
              staggerChildren: 0.1,
            }}
            className="h-[70%] flex flex-col overflow-y-auto space-y-5 md:px-20 pt-8"
          >
            {questionElement()}
          </motion.div>
        ) : (
          <div className="h-[70%] flex flex-col justify-center items-center">
            <motion.i
              animate={{
                rotateZ: 360,
                transition: {
                  duration: 6,
                  ease: [1, 0, 0.2, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                  repeatType: "loop",
                },
              }}
              className="ri-emotion-sad-fill ri-5x text-[#4D5B9E]"
            ></motion.i>
            <h1 className="font-karla font-extrabold text-2xl text-[#4D5B9E] text-center">
              Sorry, Quizap quiz with{" "}
              <span className="underline decoration-wavy decoration-[#94D7A2]">
                {api.amount}
              </span>{" "}
              questions, <br /> and in the{" "}
              <span className="underline decoration-wavy decoration-[#94D7A2]">
                {api.categoryLabel}
              </span>{" "}
              category are unavailable.
            </h1>
          </div>
        )}
        <div className="h-1/4 flex flex-col sm:justify-between justify-end items-center sm:space-y-0 space-y-4 border-t-2 shadow-2xl pt-2">
          <div className="submit flex sm:flex-row flex-col items-center sm:space-y-0 space-y-3 space-x-5">
            {quizzical && (
              <span className="font-inter font-medium text-base leading-4">
                You scored {score}/{quizObject.length} correct answers
              </span>
            )}
            {!quizNull ? (
              <div>
                {!quizzical && (
                  <button
                    onClick={gradePlayer}
                    className="bg-[#4D5B9E] px-4 py-2 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]"
                  >
                    Check Answers
                  </button>
                )}
                {quizzical && (
                  <a
                    href="#main"
                    onClick={playAgain}
                    className="bg-[#4D5B9E] px-4 py-2 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2] animate-pulse motion-reduce:animate-pulse hover:animate-none"
                  >
                    Once More!
                  </a>
                )}
              </div>
            ) : (
              <a
                href="#main"
                onClick={goBack}
                className="bg-[#4D5B9E] px-4 py-2 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2] animate-pulse motion-reduce:animate-pulse hover:animate-none"
              >
                Go Back
              </a>
            )}
          </div>
          {error && (
            <p className="text-red-500 font-karla font-bold text-sm text-center">
              🚩Please ensure that you answer all questions.
            </p>
          )}
          <Footer />
        </div>
      </div>
    </section>
  );
}
