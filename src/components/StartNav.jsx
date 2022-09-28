export default function StartNav() {
  return (
    <nav className="py-5 flex justify-between">
      <a href="#" className="flex items-center cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-[#94D7A2] text-[#94D7A2]">
          .
        </div>
        <span className="font-rubik text-3xl leading-tight tracking-wide -ml-10 z-10">
          Quizzical
        </span>
        <i className="ri-check-double-line ri-3x -ml-5 text-[#94D7A2]"></i>
      </a>
      <div className="flex items-center">
        <i className="ri-checkbox-circle-fill ri-3x sm:block hidden text-[#94D7A2] z-10"></i>
        <i className="ri-close-circle-fill ri-3x sm:block hidden text-[#F8BCBC] -ml-4"></i>
      </div>
    </nav>
  );
}
