export default function Categories() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-center mb-8">
        <i className="ri-focus-3-fill ri-3x text-[#94D7A2] -mr-[2.15rem]"></i>{" "}
        <h2 className="font-karla font-bold leading-tight text-3xl z-10">
          Quzzical Categories
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-5 text-center">
        <div className="space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white p-7 rounded-full">
          <a href="#category" className="w-fit">
            <i className="ri-book-3-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#50D3EB]"></i>
          </a>
          <h3 className="font-inter font-medium text-base">
            General <br />
            Knowledge
          </h3>
        </div>
        <div className="space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white p-7 rounded-full">
          <a href="#category" className="w-fit">
            <i className="ri-parentheses-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#50D3EB]"></i>
          </a>
          <h3 className="font-inter font-medium text-base">Science</h3>
        </div>
        <div className="space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white p-7 rounded-full">
          <a href="#category" className="w-fit">
            <i className="ri-football-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#50D3EB]"></i>
          </a>
          <h3 className="font-inter font-medium text-base">Sports</h3>
        </div>
        <div className="space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white p-7 rounded-full">
          <a href="#category" className="w-fit">
            <i className="ri-landscape-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#50D3EB]"></i>
          </a>
          <h3 className="font-inter font-medium text-base">Entertainment</h3>
        </div>
        <div className="space-y-5 shadow-xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#4D5B9E] text-white p-7 rounded-full">
          <a href="#category" className="w-fit">
            <i className="ri-history-fill ri-2x text-[#94d7a2] bg-[#f0f4fc] rounded-full p-4 hover:text-[#50D3EB]"></i>
          </a>
          <h3 className="font-inter font-medium text-base">History</h3>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="#category"
          className="w-fit flex items-center font-medium text-base leading-4 border border-solid border-[#4D5B9E] p-3 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
        >
          View More
          <i className="ri-arrow-right-s-line ri-lg text-[#4D5B9E]"></i>
        </a>
      </div>
    </section>
  );
}
