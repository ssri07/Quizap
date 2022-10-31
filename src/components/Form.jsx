import { motion } from "framer-motion";

export default function Form({
  handleChange,
  handleSubmit,
  api,
  cantStart,
  startGame,
  shuffleOptions,
}) {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  
  const generateApi = useCallback(
    (amount, category, difficulty, type) => {
      setGeneratedApi(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
    },
    [generatedApi]
  );

  //Update "api" with the value the player chooses.
  function handleChange(event, label) {
    const { name, value } = event.target;
    setApi((prevApi) => ({
      ...prevApi,
      [name]: value,
      categoryLabel: label && label !== "" ? label : prevApi.categoryLabel,
    }));
  }
  generateApi();
  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{
          type: "spring",
          duration: 1,
          delayChildren: 0.5,
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 md:grid-cols-4 gap-6 px-6"
      >
        <motion.div
          variants={variants}
          className="lg:col-auto md:col-span-2 flex flex-col space-y-3 items-center py-6 rounded-xl shadow-2xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#dde6f8]"
        >
          <i className="ri-file-list-3-fill ri-3x text-[#4D5B9E]"></i>
          <div className="flex flex-col items-center">
            <label htmlFor="amount" className="font-medium text-sm flex">
              Choose Amount
              <i className="ri-arrow-down-s-fill text-[#4D5B9E]"></i>
            </label>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-fill ri-2x text-[#94d7a2]"></i>
              <select
                name="amount"
                id="amount"
                value={api.amount}
                onChange={(e) => handleChange(e)}
                className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
              >
                <option className="bg-[#dde6f8] font-medium" value="">
                  Amount
                </option>
                <option className="bg-[#dde6f8]" value="5">
                  5
                </option>
                <option className="bg-[#dde6f8]" value="10">
                  10
                </option>
                <option className="bg-[#dde6f8]" value="15">
                  15
                </option>
                <option className="bg-[#dde6f8]" value="20">
                  20
                </option>
                {/* <option className="" value="25">
                  25
                </option>
                <option className="" value="30">
                  30
                </option> */}
              </select>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="lg:col-auto md:col-span-2 flex flex-col space-y-3 items-center py-6 rounded-xl shadow-2xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#dde6f8]"
        >
          <i className="ri-focus-3-fill ri-3x text-[#94D7A2]"></i>
          <div className="flex flex-col items-center">
            <label htmlFor="category" className="font-medium text-sm flex">
              Pick Category
              <i className="ri-arrow-down-s-fill text-[#4D5B9E]"></i>
            </label>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-fill ri-2x text-[#94d7a2]"></i>
              <select
                name="category"
                id="category"
                value={api.category}
                onChange={(e) => {
                  handleChange();
                  const categoryLabel =
                    e.target.options[e.target.selectedIndex].text;
                  handleChange(e, categoryLabel);
                }}
                className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
              >
                <option className="bg-[#dde6f8] font-medium" value="">
                  Category
                </option>
                <option className="bg-[#dde6f8]" value="9">
                  General Knowledge
                </option>
                <option className="bg-[#dde6f8]" value="17">
                  Science & Nature
                </option>
                <option className="bg-[#dde6f8]" value="18">
                  Science: Computers
                </option>
                <option className="bg-[#dde6f8]" value="19">
                  Science: Mathematics
                </option>
                <option className="bg-[#dde6f8]" value="20">
                  Mythology
                </option>
                <option className="bg-[#dde6f8]" value="21">
                  Sports
                </option>
                <option className="bg-[#dde6f8]" value="23">
                  History
                </option>
                <option className="bg-[#dde6f8]" value="10">
                  Entertainment: Books
                </option>
                <option className="bg-[#dde6f8]" value="11">
                  Entertainment: Film
                </option>
                <option className="bg-[#dde6f8]" value="12">
                  Entertainment: Music
                </option>
                <option className="bg-[#dde6f8]" value="15">
                  Entertainment: Video Games
                </option>
                <option className="bg-[#dde6f8]" value="16">
                  Entertainment: Board Games
                </option>
              </select>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="lg:col-auto lg:col-start-auto md:col-start-2 md:col-span-2 flex flex-col space-y-3 items-center py-6 rounded-xl shadow-2xl hover:outline outline-[#4d5b9e] outline-offset-4 outline-1 bg-[#dde6f8]"
        >
          <i className="ri-fire-fill ri-3x text-[#F8BCBC]"></i>
          <div className="flex flex-col items-center">
            <label htmlFor="difficulty" className="font-medium text-sm flex">
              Choose Difficulty
              <i className="ri-arrow-down-s-fill text-[#4D5B9E]"></i>
            </label>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-fill ri-2x text-[#94d7a2]"></i>
              <select
                name="difficulty"
                id="difficulty"
                value={api.difficulty}
                onChange={(e) => handleChange(e)}
                className="cursor-pointer font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
              >
                <option className="bg-[#dde6f8] font-medium" value="">
                  Difficulty
                </option>
                <option className="bg-[#dde6f8]" value="easy">
                  Easy
                </option>
                <option className="bg-[#dde6f8]" value="medium">
                  Medium
                </option>
                <option className="bg-[#dde6f8]" value="hard">
                  Hard
                </option>
              </select>
            </div>
          </div>
        </motion.div>
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
      </motion.div>
      <motion.div className="py-8">
        <motion.div
          whileInView={{
            scale: [0, 1.05, 1],
            rotateX: [0, 360, 360],
            opacity: [0, 0.5, 1],
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col md:space-y-0 space-y-5 justify-center items-center md:space-x-5"
        >
          <hr className="border-double border-1 border-[#94d7a2] w-40" />
          <button className="bg-[#94D7A2] px-5 py-2 text-white font-medium text-base leading-5 rounded hover:bg-[#86cd95] active:bg-[#7fc78f] focus:outline-none focus:ring focus:ring-[#c7f7d1] animate-bounce motion-reduce:animate-bounce hover:animate-none focus:animate-none">
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
          <hr className="border-double border-1 border-[#94d7a2] w-40" />
        </motion.div>
        {cantStart && (
          <div className="flex justify-center p-4">
            <p className="text-red-500 font-karla font-bold text-sm text-center break-words leading-relaxed">
              🚩Please make a choice in all fields, click{" "}
              <span className="text-white text-xs bg-[#94D7A2] p-1 rounded">
                Confirm
              </span>{" "}
              then{" "}
              <span className="text-white text-xs bg-[#4D5B9E] p-1 rounded">
                Start Quiz
              </span>
            </p>
          </div>
        )}
      </motion.div>
    </form>
  );
}
