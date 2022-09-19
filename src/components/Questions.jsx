export default function Questions({ question, options, no, id, pick }) {
  const optionButtons = options.map((option, i) => {
    const styles = {
      backgroundColor: option.isPicked ? "#D6DBF5" : "",
    };

    return (
      <button
        key={option.id}
        style={styles}
        onClick={() => pick(option.id, id)}
        className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:shadow hover:shadow-[#4D5B9E] focus:outline-none focus:ring focus:ring-[#4D5B9E]"
      >
        {option.option}
      </button>
    );
  });

  return (
    <div className="flex flex-col space-y-4 py-4 px-8 border-b border-[#DBDEF0]">
      <h1 className="font-karla font-bold text-lg leading-5">
        {" "}
        {no}). {question}{" "}
      </h1>
      <div className="flex space-x-3">{optionButtons}</div>
    </div>
  );
}
