const arrCoords = 1203;

const triplet = (n) => {
  const newArr = n.toString().split("").map(Number);
  let evn = 0;
  let odd = 0;
  newArr.forEach((element) => {
    if (element % 2 === 0) {
      evn = evn + element;
    } else {
      odd = odd + element;
    }
  });
  return evn - odd;
};

console.log(triplet(arrCoords));
