let n = 8664333200;
console.log(n);

let m = n
  .toString()
  .split("")
  .sort((a, b) => b - a)
  .reduce((a, b) => (a += b));

let o = parseInt(m);
console.log(o);
