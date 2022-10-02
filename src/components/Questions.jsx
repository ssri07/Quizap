import { motion } from "framer-motion";
export default function Questions({
  question,
  options,
  no,
  id,
  pick,
  update,
  quizzical,
  variants,
}) {
  const optionButtons = options.map((option, i) => {
    const styles = {
      backgroundColor:
        !quizzical && option.isPicked
          ? "#D6DBF5"
          : quizzical && option.isCorrect
          ? "#94D7A2"
          : quizzical && option.isWrong
          ? "#F8BCBC"
          : "",
    };

    return (
      <button
        key={option.id}
        style={styles}
        onClick={() => {
          pick(option.id, id);
          update(no - 1, option.option);
        }}
        className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
      >
        {option.option}
      </button>
    );
  });

  return (
    <motion.div
      variants={variants}
      className="flex flex-col space-y-4 py-4 md:px-0 px-6 md:pr-28 border-b border-[#DBDEF0]"
    >
      <h1 className="font-karla font-bold text-lg leading-6">
        {" "}
        {no}). {question}{" "}
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-6">
        {optionButtons}
      </div>
    </motion.div>
  );
}
