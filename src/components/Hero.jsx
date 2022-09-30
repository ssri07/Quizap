import Slide from "./Slide";

export default function Hero() {
  return (
    <section className="hero shapedividers_com-hero py-12">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <div className="flex flex-col space-y-5 sm:px-0 px-5 md:w-1/2 z-10">
          <div>
            <p className="font-inter font-thin test-base">
              Put your brain to the test.
            </p>
            <h1 className="font-karla font-extrabold lg:text-6xl text-5xl break-words leading-tight">
              <span className="underline decoration-wavy decoration-[#94D7A2]">
                Sharpen
              </span>{" "}
              your mind today!
            </h1>
          </div>
          <p className="font-inter font-medium test-lg break-words">
            The best place to take an online quiz that's fun. Take a quiz now!
          </p>
          <a
            href="#main"
            className="bg-[#4D5B9E] w-fit px-8 py-3 text-white font-medium text-lg leading-5 rounded hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2] animate-pulse motion-reduce:animate-pulse hover:animate-none"
          >
            Let's go!
          </a>
        </div>
        <Slide />
      </div>
    </section>
  );
}
