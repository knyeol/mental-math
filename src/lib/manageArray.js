export function toggleItems(array, item) {
  if (array.length === 1 && item === array[0]) return array;
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
  else array.push(item);
  return array;
}

export function randomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
