import { sign } from "../lib/values";

export function Question({ operands, operation }) {
  const [a, b] = operands;

  return <h1 className="question">{`${a} ${sign[operation]} ${b}`}</h1>;
}
