export default function Questions({
  question,
  options,
  no,
  id,
  pick,
  update,
  quizzical,
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
        className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#D6DBF5]"
      >
        {option.option}
      </button>
    );
  });

  return (
    <div className="flex flex-col space-y-4 py-4 px-8 border-b border-[#DBDEF0]">
      <h1 className="font-karla font-bold text-lg leading-6">
        {" "}
        {no}). {question}{" "}
      </h1>
      <div className="flex space-x-3">{optionButtons}</div>
    </div>
  );
}
