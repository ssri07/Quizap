export default function Start({ startGame, shuffleOptions }) {
  return (
    <section className="start container m-auto h-screen bg-[#f0f4fc] shadow-2xl">
      <div className="h-full flex flex-col items-center justify-center space-y-5">
        <h1 className="font-karla font-bold leading-9 text-3xl">Quizzical</h1>
        <p className="font-inter font-normal text-base leading-5">
          Put your brain to the test!
        </p>
        <p className="font-inter font-normal text-base leading-5">
          Take your time! Try to ace the quiz then click the "Check Answer"
          button to reveal the correct answers.
        </p>
        <button
          onClick={() => {
            startGame();
            shuffleOptions();
          }}
          className="bg-[#4D5B9E] px-10 py-3 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]"
        >
          Start Quiz
        </button>
      </div>
    </section>
  );
}
