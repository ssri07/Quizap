export default function Flow() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center mb-8">
        <i className="ri-flow-chart ri-2x text-[#94D7A2]"></i>
        <h2 className="font-karla font-bold leading-tight text-4xl">
          Quizap{" "}
          <span className="underline decoration-wavy decoration-[#94D7A2] decoration-2">
            Flow
          </span>
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center sm:p-0 p-4">
        <a href="#amount">
          <div className="shadow-xl hover:outline bg-[#dde6f8] md:-skew-x-3 outline-[#4d5b9e] outline-offset-4 outline-1 rounded-lg flex flex-col items-center space-y-5 px-5 py-8">
            <i className="ri-file-list-3-fill ri-3x text-[#4D5B9E]"></i>
            <h3 className="font-karla font-medium text-lg">Choose Amount</h3>
            <p className="font-thin text-sm md:w-full w-3/5 break-words text-center">
              Choose the number of questions you want in the quiz you'll take.
            </p>
          </div>
        </a>
        <i className="ri-arrow-right-fill ri-2x text-[#4D5B9E] md:block hidden"></i>
        <i className="ri-arrow-down-fill ri-2x text-[#4D5B9E] md:hidden block"></i>
        <a href="#category">
          <div className="shadow-xl hover:outline bg-[#dde6f8] outline-[#4d5b9e] outline-offset-4 outline-1 rounded-lg flex flex-col items-center space-y-5 px-5 py-8">
            <i className="ri-focus-3-fill ri-3x text-[#94D7A2]"></i>
            <h3 className="font-karla font-medium text-lg">Pick Category</h3>
            <p className="font-thin text-sm md:w-full w-3/5 break-words text-center">
              Pick the area you want your quiz questions to center on.
            </p>
          </div>
        </a>
        <i className="ri-arrow-right-fill ri-2x text-[#4D5B9E] md:block hidden"></i>
        <i className="ri-arrow-down-fill ri-2x text-[#4D5B9E] md:hidden block"></i>
        <a href="#difficulty">
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
        </a>
      </div>
      <div className="flex flex-col items-center space-y-2 mt-3">
        <i className="ri-arrow-down-fill ri-2x text-[#4D5B9E]"></i>
        <div className="flex items-center space-x-2">
          <span className="text-white text-base font-bold bg-[#94D7A2] p-2 rounded">
            Confirm
          </span>
          <i className="ri-arrow-right-fill ri-2x text-[#4D5B9E]"></i>
          <span className="text-white text-base font-bold bg-[#4D5B9E] p-2 rounded">
            Start Quiz
          </span>
        </div>
        <i className="ri-recycle-fill ri-2x text-[#4D5B9E]"></i>
      </div>
    </section>
  );
}
