import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [quizObject, setQuizObject] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [playersAnswers, setPlayersAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [quizzical, setQuizzical] = useState(false);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);

  //Make a call to the API; whenever "reset" changes make another call.
  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple"
      );
      const data = await res.json();
      setQuizData(data.results);
    }
    getQuestions();
  }, [reset]);

  //Start the game.
  const startGame = useCallback(() => {
    setStart((prevStart) => !prevStart);
  }, []);

  //Extract the correct answers from the "quizObject" variable.
  useEffect(() => {
    setCorrectAnswers(quizObject.map((object) => object.correct));
  }, [quizObject]);

  //Whenever "quizData" changes, reset the players answers.
  useEffect(() => {
    setPlayersAnswers(quizData.map((quiz, i) => ({ [`answer${i + 1}`]: "" })));
  }, [quizData]);

  //Whenever "quizzical" changes, check for how many of the player's answers matches the correct answers.
  useEffect(() => {
    setScore(() => {
      let grade = 0;
      correctAnswers.forEach((answer, i) => {
        if (playersAnswers[i][`answer${i + 1}`] === answer) {
          grade++;
        }
      });
      return grade;
    });
  }, [quizzical]);

  //Whenever "quizzical" changes, check if quizzical === false. If so change the value of reset which triggers a new call to the API.
  useEffect(() => {
    if (!quizzical) {
      setReset((prevReset) => !prevReset);
    }
  }, [quizzical]);

  //Extract the needed info from quizData whenever it changes.
  useEffect(() => {
    setQuizObject((prevObject) =>
      quizData.map((result) => ({
        id: nanoid(),
        question: result.question,
        correct: result.correct_answer,
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

  //Shuffle the options to be displayed.
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
  }, [quizObject]);

  //Ensure that the player is only able to pick one answer.
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

  //Get the value of the answers the player picks then use it to update "playersAnswers".
  const updatePlayersAnswers = useCallback(
    (no, value) => {
      setPlayersAnswers((prevAnswers) =>
        prevAnswers.map((answer, i) =>
          i === no ? { [`answer${no + 1}`]: value } : { ...answer }
        )
      );
    },
    [playersAnswers]
  );

  //Toggle the value of the "isPicked" property of the buttons.
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

  //Ensure that all questions have been answered. If so change the value of "quizzical" which will trigger "setScore".
  const gradePlayer = useCallback(() => {
    const allQuestionsAnswered = playersAnswers.every(
      (answer, i) => answer[`answer${i + 1}`] !== ""
    );
    if (allQuestionsAnswered) {
      setError(false);
      setQuizzical(true);
    } else {
      setError(true);
    }
  }, [playersAnswers, error, quizzical]);

  //Set "quizzical" to "false". This will trigger reset and reset the game.
  const playAgain = useCallback(() => {
    setQuizzical(false);
    startGame();
  }, [quizzical]);

  return (
    <section className="app bg-[#eff2f9] text-[#293264] h-auto">
      {/* Page to show when game hasn't started. */}
      {!start && (
        <Start startGame={startGame} shuffleOptions={shuffleOptions} />
      )}

      {/* Page to show when game starts. */}
      {start && (
        <Quiz
          quizObject={quizObject}
          toggleIsPicked={toggleIsPicked}
          updatePlayersAnswers={updatePlayersAnswers}
          gradePlayer={gradePlayer}
          score={score}
          error={error}
          quizzical={quizzical}
          playAgain={playAgain}
        />
      )}
    </section>
  );
}
