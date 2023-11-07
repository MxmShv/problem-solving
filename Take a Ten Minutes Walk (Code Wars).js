function isValidWalk(walk) {
  console.log(typeof walk, walk);
  console.log(walk.length);
  return walk.length === 10 ? true : false;
}
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
