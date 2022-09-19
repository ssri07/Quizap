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

  function shuffle(arr) {
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  }

  const shuffleOptions = useCallback(() => {
    setQuizObject((prevObject) =>
      prevObject.map((object) => {
        const shuffledOptionsArray = shuffle(object.options);
        return { ...object, options: shuffledOptionsArray };
      })
    );
  }, []);

  function resetOptionState(id) {
    setQuizObject((prevObject) =>
      prevObject.map((object) =>
        object.id === id
          ? {
              ...object,
              options: object.options.map((option) => ({
                ...option,
                isPicked: false,
              })),
            }
          : object
      )
    );
  }

  const toggleIsPicked = useCallback((id, questionId) => {
    resetOptionState(questionId);
    setQuizObject((prevObject) =>
      prevObject.map((object) => ({
        ...object,
        options: object.options.map((option) =>
          option.id === id ? { ...option, isPicked: true } : option
        ),
      }))
    );
  }, []);

  return (
    <section className="app bg-[#eff2f9] text-[#293264] h-auto">
      <Start startQuiz={startQuiz} shuffleOptions={shuffleOptions} />
      <Quiz quizObject={quizObject} toggleIsPicked={toggleIsPicked} />
    </section>
  );
}
