export const store = {
  operation: "operation",
  operations: "operations",
  difficulty: "difficulty",
  operands: "operands",
  score: "score"
};

export function storeItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
