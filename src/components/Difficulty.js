import { diff } from "../lib/values";
import { store, storeItem } from "../lib/storage";

export function Difficulty({ difficulty, setDifficulty }) {
  function onClick(value) {
    setDifficulty(value);
    storeItem(store.difficulty, value);
  }

  const getSelected = target => (difficulty === target ? "selected" : "");

  return (
    <div className="buttons-container">
      <button
        className={getSelected(diff.easy)}
        onClick={() => onClick(diff.easy)}
      >
        Easy
      </button>
      <button
        className={getSelected(diff.medium)}
        onClick={() => onClick(diff.medium)}
      >
        Medium
      </button>
      <button
        className={getSelected(diff.hard)}
        onClick={() => onClick(diff.hard)}
      >
        Hard
      </button>
    </div>
  );
}
