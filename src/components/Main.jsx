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
    <main className="py-12">
      <div id="main" className="flex items-center justify-center">
        <h2 className="font-karla font-bold leading-tight text-4xl z-10">
          Let's Go
        </h2>
        <i className="ri-fire-fill ri-3x text-[#94D7A2] mb-2"></i>
      </div>
      <div className="flex justify-center mb-8">
        <span className="font-medium text-lg">Good Luck. Have fun!</span>
      </div>
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
