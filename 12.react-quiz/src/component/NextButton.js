function NextButton({ dispatch, answer, index, numQuesitons }) {
  if (answer === null) return null;

  if (index < numQuesitons - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );
  if (index === numQuesitons - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}>
        Finished
      </button>
    );
}

export default NextButton;
