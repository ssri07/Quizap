import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [quizObject, setQuizObject] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple"
      );
      const data = await res.json();
      setQuizData(data.results);
    }
    getQuestions();
  }, []);

  const startQuiz = useCallback(() => {
    setQuizObject(
      quizData.map((result) => ({
        id: nanoid(),
        question: result.question,
        options: [
          { id: nanoid(), isPicked: false, option: result.correct_answer },
          {
            id: nanoid(),
            isPicked: false,
            option: result.incorrect_answers[0],
          },
          {
            id: nanoid(),
            isPicked: false,
            option: result.incorrect_answers[1],
          },
          {
            id: nanoid(),
            isPicked: false,
            option: result.incorrect_answers[2],
          },
        ],
      }))
    );
  }, [quizData]);

  const toggleIsPicked = useCallback(
    (id, option) => {
      setQuizObject(
        quizObject.map((object) => {
          object.options.map((option, i) =>
            option.id === id
              ? {
                  ...object,
                  [object.options[i].isPicked]: !object.options[i].isPicked,
                }
              : object
          );
        })
      );

      console.log(`Change your fucking color now! ${option}:${id}`);
    },
    [quizObject]
  );

  return (
    <section className="app bg-[#eff2f9] text-[#293264] h-auto">
      <Start startQuiz={startQuiz} />
      <Quiz quizObject={quizObject} toggleIsPicked={toggleIsPicked} />
    </section>
  );
}
