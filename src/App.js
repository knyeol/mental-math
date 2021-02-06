import "./App.css";
import { useState, useEffect } from "react";
import { store, storeItem, getItem } from "./lib/storage";
import { getOperands, getAnswer } from "./lib/numbers";
import {
  Question,
  Difficulty,
  Operations,
  UserAnswer,
  Score,
} from "./components";

function App() {
  const [init, setInit] = useState(false);
  const initState = {
    operation: getItem(store.operation) || ["add"],
    difficulty: getItem(store.difficulty) || "easy",
    operands: getItem(store.operands) || [7, 9],
    score: getItem(store.score) || { right: 0, wrong: 0 },
  };
  const [operation, setOperation] = useState(initState.operation);
  const [difficulty, setDifficulty] = useState(initState.difficulty);
  const [operands, setOperands] = useState(initState.operands);
  const [score, setScore] = useState(initState.score);
  const [answer, setAnswer] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!init) return setInit(true);

    const operands = getOperands(operation, difficulty);
    setOperands(operands);
    storeItem(store.operands, operands);
  }, [operation, difficulty, score]);

  useEffect(() => {
    const answer = getAnswer(operands, operation);
    setAnswer(answer);
  }, [operands]);

  return (
    <div className="container">
      <Question operands={operands} operation={operation} />
      <UserAnswer answer={answer} setScore={setScore} setSubmit={setSubmit} />
      <Score score={score} setScore={setScore} setInit={setInit} />
      <Operations submit={submit} setOperation={setOperation} />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
    </div>
  );
}

export default App;
