let coordinates = [0, 0, 0, 1, 1, 0, 0, 0, 0, -3, -3, 0];
let small = [],
  big = [];

coordinates.forEach((v, i) => (i < 6 ? small.push(v) : big.push(v)));

console.log(small, big);

dx = small[0] - small[4];
dy = small[1] - small[5];
//
dx2 = big[0] - big[4];
dy2 = big[1] - big[5];

console.log(Math.atan2(dy, dx));
console.log(Math.atan2(dy2, dx2));
// 86

// Assumptions: x is the horizontal axis, and increases when moving from left to right. y is the vertical axis, and increases from bottom to top. (touch_x, touch_y) is the point selected by the user. (center_x, center_y) is the point at the center of the screen. theta is measured counter-clockwise from the +x axis. Then:

// delta_x = touch_x - center_x;
// delta_y = touch_y - center_y;
// theta_radians = atan2(delta_y, delta_x);
// // check if mirror
// if (!(small[0] == big[0] && small[1] == big[1])) {
//   return false;
// }

// console.log("mirroered!");
// let b1 = small[2] - small[3];
// let b2 = big[2] - big[3];
// let c1 = small[4] - small[5];
// let c2 = big[4] - big[5];

// console.log(b1, b2, c1, c2);

// let ratioB = Math.abs(b1 - b2);
// let ratioC = Math.abs(c1 - c2);

// console.log(ratioB, ratioC);
// return ratioB === ratioC;

// 0 2 , 2 4
