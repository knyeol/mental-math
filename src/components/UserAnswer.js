import { useState } from "react";
import { store, storeItem } from "../lib/storage";

export function UserAnswer({ answer, setScore, setSubmit }) {
  const [input, setInput] = useState("");

  function onChange(e) {
    setInput(e.target.value);
  }

  function updateScore(score) {
    const newScore =
      +input === answer
        ? { ...score, right: score.right + 1 }
        : { ...score, wrong: score.wrong + 1 };

    storeItem(store.score, newScore);
    return newScore;
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmit((submit) => !submit);

    if (!input.trim()) return;
    setScore((score) => updateScore(score));
    setInput("");
  }

  return (
    <div className="answer-container">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          autoFocus
          className="user-input"
          type="number"
          value={input}
          onChange={(e) => onChange(e)}
        />
      </form>
    </div>
  );
}
