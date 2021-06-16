let words = ["is", "valid", "id"];
// let camelCase = "IsValid";
let camelCase = "IsValIdOneValid";
let spt = camelCase.replace(/([a-z](?=[A-Z]))/g, "$1 ").split(" ");
let c = 0;

for (let j = 0; j < spt.length; j++) {
  if (words.includes(spt[j].toLowerCase())) {
    c++;
    console.log(words + "-" + spt[j]);
  }
}
if (c == spt.length) {
  console.log(44444);
}
console.log(words);
console.log(spt);
