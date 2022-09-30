import Questions from "./Questions";
import Footer from "./Footer";

export default function Quiz({
  quizObject,
  toggleIsPicked,
  updatePlayersAnswers,
  gradePlayer,
  score,
  error,
  quizzical,
  playAgain,
}) {
  function questionElement() {
    return quizObject.map((question, i) => (
      <Questions
        key={question.id}
        {...question}
        no={i + 1}
        pick={toggleIsPicked}
        update={updatePlayersAnswers}
        quizzical={quizzical}
      />
    ));
  }

  return (
    <section className="quiz container bg-[#f0f4fc] m-auto h-screen shadow-2xl select-none">
      <div className="h-full">
        <div className="h-3/4 flex flex-col overflow-y-auto space-y-5 md:px-20 pt-8">
          {questionElement()}
        </div>
        <div className="h-1/4 flex flex-col justify-evenly items-center border-t-2 shadow-2xl">
          <div className="submit flex sm:flex-row flex-col items-center sm:space-y-0 space-y-3 space-x-5">
            {quizzical && (
              <span className="font-inter font-medium text-base leading-4">
                You scored {score}/{quizObject.length} correct answers
              </span>
            )}
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
                className="bg-[#4D5B9E] px-4 py-2 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2] animate-bounce motion-reduce:animate-bounce hover:animate-none"
              >
                Once More!
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
