function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}
function getRandomInteger(min, max) {
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  return Math.floor(rand);
}
export { getRandomArrayElement, getRandomInteger };
