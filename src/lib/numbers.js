const max = {
  easy: 12,
  medium: 24,
  hard: 50
};

export function getOperands(operator, difficulty) {
  const randomInt = () => Math.ceil(Math.random() * max[difficulty]);
  const [a, b] = [randomInt(), randomInt()];

  if (operator === "divide") return [a * b, b];
  return [a, b];
}

export function getAnswer(operands, operator) {
  const [a, b] = operands;
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  }[operator];
}
