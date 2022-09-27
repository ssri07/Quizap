import Form from "./Form";

export default function Main({
  cantStart,
  startGame,
  shuffleOptions,
  handleChange,
  handleSubmit,
  api,
}) {
  return (
    <main id="main">
      <div className="flex items-center justify-center">
        <h2 className="font-karla font-bold leading-tight text-4xl z-10">
          Let's Go
        </h2>
        <i className="ri-fire-fill ri-3x text-[#94D7A2] mb-2"></i>
      </div>
      <p className="font-inter font-normal text-base leading-tight">
        Put your brain to the test!
      </p>
      <p className="font-inter font-normal text-base leading-tight">
        Take your time! Try to ace the quiz then click the "Check Answer" button
        to reveal the correct answers.
      </p>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        api={api}
        cantStart={cantStart}
        startGame={startGame}
        shuffleOptions={shuffleOptions}
      />
    </main>
  );
}
