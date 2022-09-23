import Questions from "./Questions";

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
      />
    ));
  }

  return (
    <section className="quiz container bg-[#f0f4fc] m-auto h-screen shadow-2xl">
      <div className="h-full">
        <div className="h-5/6 flex flex-col overflow-y-auto space-y-5 px-20 py-8">
          {questionElement()}
        </div>
        <div className="h-1/6 flex flex-col justify-evenly items-center shadow-2xl">
          <div className="submit space-x-5">
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
              <button
                onClick={playAgain}
                className="bg-[#4D5B9E] px-4 py-2 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]"
              >
                Play Again
              </button>
            )}
          </div>
          {error && (
            <p className="text-red-500 font-karla font-bold text-sm">
              🚩Please ensure that you answer all questions.
            </p>
          )}
          <p className="font-inter font-normal text-base leading-4">
            Built with 💪🏻 by Abdul
          </p>
        </div>
      </div>
    </section>
  );
}
