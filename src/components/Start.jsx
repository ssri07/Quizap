export default function Start() {
  return (
    <section className="start container m-auto h-screen bg-[#f0f4fc] shadow-2xl">
      <div className="h-full flex flex-col items-center justify-center space-y-5">
        <h1 className="font-karla font-bold leading-9 text-3xl">Quizzical</h1>
        <p className="font-inter font-normal text-base leading-5">
          Put your brain to the test!
        </p>
        <button className="bg-[#4D5B9E] px-10 py-3 text-[#F5F7FB] font-medium text-base leading-5 rounded-lg hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]">
          Start Quiz
        </button>
      </div>
    </section>
  );
}
