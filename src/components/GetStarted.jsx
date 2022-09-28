export default function GetStarted() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <i className="ri-bubble-chart-fill ri-3x text-[#94D7A2]"></i>
        <h1 className="font-karla font-bold leading-tight text-4xl z-10">
          Get Started
        </h1>
      </div>
      <div className="flex space-x-4 items-center justify-center mb-6">
        <hr className="border-double border-2 border-[#94d7a2] w-60" />
        <span className="font-medium text-lg">How To Play</span>
        <hr className="border-double border-2 border-[#94d7a2] w-60" />
      </div>
      <div className="grid grid-cols-6 gap-5 px-5">
        <div className="col-span-3 bg-[#dde6f8] p-5 rounded-lg shadow-xl skew-y-3">
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="font-normal my-3 break-words leading-relaxed">
              Pick the amount of questions you want in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Amount
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Choose the kind of questions you want in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Category
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Choose the difficulty of the questions you'll get in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Difficulty
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-3 bg-[#dde6f8] p-5 rounded-lg shadow-xl -skew-y-3">
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="marker:text-[#4D5B9E] font-normal my-3 break-words leading-relaxed">
              Click{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Confirm
              </span>{" "}
              to get your quiz questions ready.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Click{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Start Quiz
              </span>{" "}
              to start.
            </li>
            <li className="marker:text-[#4D5B9E] font-normal my-3 break-words italic leading-relaxed">
              <span className="font-karla font-bold text-lg underline decoration-[#94D7A2] decoration-wavy mr-1">
                Note:{" "}
              </span>
              Always click the{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Confirm
              </span>{" "}
              button before starting the quiz. Otherwise, your quiz won't be
              created/updated, and in some cases you won't be able to start the
              quiz.
            </li>
          </ul>
        </div>
        <div className="col-start-2 col-end-6 bg-[#dde6f8] p-5 rounded-lg shadow-xl">
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="font-normal my-3 break-words leading-relaxed">
              Answer all questions and click the{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Check Answer
              </span>{" "}
              button to reveal your score, and the correct answers.
            </li>
            <li className="font-normal my-3 break-words italic leading-relaxed">
              <span className="font-karla font-bold text-lg underline decoration-[#94D7A2] decoration-wavy mr-1">
                Note:
              </span>{" "}
              Make sure you answer all questions. Otherwise, you won't be able
              to check the correct answers, and your score.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              When you've answered all questions and clicked the{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Check Answer
              </span>{" "}
              button, the option of questions you answered correctly will
              display{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Green
              </span>{" "}
              background color, while the ones you got wrong will display{" "}
              <span className="text-white font-bold text-xs bg-[#F8BCBC] p-1 rounded">
                Red
              </span>{" "}
              background color.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Once More!
              </span>{" "}
              Play again. Enjoy!
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-4 items-center justify-center my-6">
        <hr className="border-double border-1 border-[#94d7a2] w-40" />
        <div>
          <i className="ri-bubble-chart-fill ri-2x text-[#94D7A2]"></i>
          <i className="ri-bubble-chart-fill ri-2x text-[#94D7A2]"></i>
        </div>
        <hr className="border-double border-1 border-[#94d7a2] w-40" />
      </div>
    </section>
  );
}
