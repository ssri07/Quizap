import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";

export default function Quiz() {
  const [quizQuestions, setQuizQuestions] = useState();

  useEffect(() => {
    // async function getQuestions() {
    //   const res = await fetch(
    //     "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple"
    //   );
    //   const data = await res.json();
    //   setQuizQuestions(data.results);
    // }
    // getQuestions();
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple"
    );
    
  }, []);

  const questionElement = quizQuestions.map((question) => (
    <Questions key={nanoid()} {...question} />
  ));

  return (
    <section className="quiz container bg-[#f0f4fc] m-auto h-screen shadow-2xl">
      <div className="h-full">
        <div>{questionElement}</div>
      </div>
    </section>
  );
}
