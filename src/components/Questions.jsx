export default function Questions({
  question,
  correct,
  wrong,
  no,
  id,
  pick,
  isPicked,
}) {
  const styles = {
    backgroundColor: isPicked ? "#D6DBF5" : "",
  };

  return (
    <div className="flex flex-col space-y-4 py-4 px-8 border-b border-[#DBDEF0]">
      <h1 className="font-karla font-bold text-lg leading-5">
        {" "}
        {no}). {question}{" "}
      </h1>
      <div className="flex space-x-3">
        <button
          style={styles}
          onClick={() => pick(id)}
          className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:bg-[#D6DBF5] hover:text-white focus:outline-none focus:ring focus:ring-[#4D5B9E]"
        >
          {correct}
        </button>
        <button
          style={styles}
          onClick={() => pick(id)}
          className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:bg-[#D6DBF5] hover:text-white focus:outline-none focus:ring focus:ring-[#4D5B9E]"
        >
          {wrong[0]}
        </button>
        <button
          style={styles}
          onClick={() => pick(id)}
          className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:bg-[#D6DBF5] hover:text-white focus:outline-none focus:ring focus:ring-[#4D5B9E]"
        >
          {wrong[1]}
        </button>
        <button
          style={styles}
          onClick={() => pick(id)}
          className="font-inter font-medium text-xs leading-4 border border-solid border-[#4D5B9E] px-4 py-2 rounded-lg hover:bg-[#D6DBF5] hover:text-white focus:outline-none focus:ring focus:ring-[#4D5B9E]"
        >
          {wrong[2]}
        </button>
      </div>
    </div>
  );
}
