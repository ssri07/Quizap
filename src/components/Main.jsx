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
      <h1 className="font-karla font-bold leading-9 text-3xl">Quizzical</h1>
      <p className="font-inter font-normal text-base leading-5">
        Put your brain to the test!
      </p>
      <p className="font-inter font-normal text-base leading-5">
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
