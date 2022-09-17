import Questions from "./Questions";

export default function Quiz({ quizObject, toggleIsPicked }) {
  function questionElement() {
    return quizObject.map((question, i) => (
      <Questions
        key={question.id}
        {...question}
        no={i + 1}
        pick={toggleIsPicked}
      />
    ));
  }

  return (
    <section className="quiz container bg-[#f0f4fc] m-auto h-screen shadow-2xl">
      <div className="h-full">
        <div className="h-5/6 flex flex-col overflow-y-auto space-y-5 px-20 py-8">
          {questionElement()}
        </div>
        <div className="submit h-1/6 flex items-center justify-center space-x-5 shadow-2xl">
          <span className="font-inter font-medium text-base leading-4">
            You scored 3/5 correct answers
          </span>
          <button className="bg-[#4D5B9E] px-6 py-3 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]">
            Check Answers
          </button>
        </div>
      </div>
    </section>
  );
}
