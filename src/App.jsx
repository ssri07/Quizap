import { useState, useEffect } from "react";
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

  function startQuiz() {
    setQuizObject(
      quizData.map((result) => ({
        id: nanoid(),
        question: result.question,
        correct: result.correct_answer,
        wrong: result.incorrect_answers,
        isPicked: false,
      }))
    );
  }

  function toggleIsPicked(id) {
    setQuizObject((prevQuizObject) =>
      prevQuizObject.map((quiz) => {
        quiz.id === id ? { ...quiz, isPicked: !quiz.isPicked } : quiz;
      })
    );

    // setQuizObject((prevQuiz) =>
    //   prevQuiz.map((quiz) => ({ ...quiz, isPicked: !quiz.isPicked }))
    // );
  }

  return (
    <section className="app bg-[#eff2f9] text-[#293264] h-auto">
      <Start startQuiz={startQuiz} />
      <Quiz quizObject={quizObject} toggleIsPicked={toggleIsPicked} />
    </section>
  );
}
