export default function Form({
  handleChange,
  handleSubmit,
  api,
  cantStart,
  startGame,
  shuffleOptions,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          name="amount"
          id="amount"
          value={api.amount}
          onChange={(e) => handleChange(e)}
          className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
        >
          <option value="">Amount</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
        <select
          name="category"
          id="category"
          value={api.category}
          onChange={(e) => handleChange(e)}
          className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
        >
          <option className="" value="">
            Category
          </option>
          <option className="" value="9">
            General Knowledge
          </option>
          <option className="" value="17">
            Science & Nature
          </option>
          <option className="" value="18">
            Science: Computers
          </option>
          <option className="" value="19">
            Science: Mathematics
          </option>
          <option className="" value="20">
            Mythology
          </option>
          <option className="" value="21">
            Sports
          </option>
          <option className="" value="23">
            History
          </option>
          <option className="" value="10">
            Entertainment: Books
          </option>
          <option className="" value="11">
            Entertainment: Film
          </option>
          <option className="" value="12">
            Entertainment: Music
          </option>
          <option className="" value="15">
            Entertainment: Video Games
          </option>
          <option className="" value="16">
            Entertainment: Board Games
          </option>
        </select>
        <select
          name="difficulty"
          id="difficulty"
          value={api.difficulty}
          onChange={(e) => handleChange(e)}
          className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
        >
          <option value="">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        {/* <select
          name="type"
          id="type"
          value={api.type}
          onChange={(e) => handleChange(e)}
          className="cursor-pointer"
        >
          <option value="">Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select> */}
      </div>
      <div>
        <button className="bg-[#94D7A2] px-5 py-2 text-white font-medium text-base leading-5 rounded hover:bg-[#86cd95] active:bg-[#7fc78f] focus:outline-none focus:ring focus:ring-[#c7f7d1]">
          Confirm
        </button>
        <button
          type="button"
          onClick={() => {
            startGame();
            shuffleOptions();
          }}
          className="bg-[#4D5B9E] px-5 py-2 text-white font-medium text-base leading-5 rounded hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2]"
        >
          Start Quiz
        </button>
      </div>
      {cantStart && (
        <p className="text-red-500 font-karla font-bold text-sm">
          🚩Please make a choice in all fields, click{" "}
          <span className="text-white text-xs bg-[#94D7A2] p-1 rounded">
            Confirm
          </span>{" "}
          then{" "}
          <span className="text-white text-xs bg-[#4D5B9E] p-1 rounded">
            Start Quiz
          </span>
        </p>
      )}
    </form>
  );
}
