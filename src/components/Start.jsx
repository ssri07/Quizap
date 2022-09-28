import StartNav from "./StartNav";
import Hero from "./Hero";
import Flow from "./Flow";
import Categories from "./Categories";
import GetStarted from "./GetStarted";
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
      <div className="h-full sm:px-8 px-6 overflow-y-auto scroll-smooth">
        <StartNav />
        <Hero />
        <Flow />
        <Categories />
        <GetStarted />
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
