import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],
  //which state we are in :-> "loading", 'error','ready','finished'
  status: "loading",
  index: 0,
};
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
      return { ...currState, status: "active" };
    default:
      throw new Error("Action unknow");
  }
}

export default function App() {
  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
        {status === "active" && <Questions question={questions[index]} />}
      </Main>
    </div>
  );
}
