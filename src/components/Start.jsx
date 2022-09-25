import StartNav from "./StartNav";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

export default function Start({
  cantStart,
  startGame,
  shuffleOptions,
  handleChange,
  handleSubmit,
  api,
}) {
  return (
    <section className="start container m-auto h-screen bg-[#f0f4fc] shadow-2xl">
      <div className="h-full px-8 overflow-y-auto scroll-smooth">
        <StartNav />
        <Hero />
        <Main
          cantStart={cantStart}
          startGame={startGame}
          shuffleOptions={shuffleOptions}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          api={api}
        />
        <Footer />
      </div>
    </section>
  );
}
