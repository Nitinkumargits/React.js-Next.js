import { useEffect, useReducer } from "react";

import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const initialState = {
  questions: [],
  //which state we are in :-> "loading", 'error','ready','finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 10,
};
const SECS_PER_QUESTION = 30;

function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...currState, questions: action.payload, status: "ready" };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };
    case "start":
      return {
        ...currState,
        status: "active",
        secondsRemaining: currState.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const question = currState.questions.at(currState.index);
      if (!question) return currState; // Avoid errors if question is undefined

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1, answer: null };

    case "finished":
      return {
        ...currState,
        status: "finished",
        highscore:
          currState.points > currState.highscore
            ? currState.points
            : currState.highscore,
      };

    case "restart":
      return { ...initialState, question: currState.question, status: "ready" };
    // return {
    //   ...currState,
    //   points: 0,
    //   highscore: 0,
    //   index: 0,
    //   answer: null,
    //   status: "ready",
    // };

    case "tick":
      return {
        ...currState,
        secondsRemaining: currState.secondsRemaining - 1,
        status:
          currState.secondsRemaining === 0 ? "finished" : currState.status,
      };

    default:
      throw new Error("Action unknow");
  }
}

export default function App() {
  const [
    { status, questions, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            {questions[index] && (
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
            )}
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuesitons={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
