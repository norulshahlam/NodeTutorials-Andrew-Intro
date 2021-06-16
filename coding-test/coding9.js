let s = "bitcoin take over the world maybe who knows perhaps";

let u = s.split(" ").reduce((a, b) => (a.length < b.length ? a : b)).length;
console.log(u);
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
*/
