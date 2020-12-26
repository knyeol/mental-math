import { store, storeItem } from "../lib/storage";

export function Score({ score, setScore, setInit }) {
  function onClick() {
    const newScore = { right: 0, wrong: 0 };
    setScore(newScore);
    storeItem(store.score, newScore);
    setInit(false);
  }

  return (
    <div className="score-container">
      <div className="score-display">
        <p>😃&ensp;{score.right}</p>
        <p>😨&ensp;{score.wrong}</p>
      </div>
      <div className="score-button-container">
        <button className="score-button" onClick={() => onClick()}>
          Reset
        </button>
      </div>
    </div>
  );
}
