"use strict";

const a = [1, 2, 3, 4, 5, 6, 7];

let max = a[0];
for (let i = 0; i <= a.length - 1; i += 1) {
  if (a[i] > max) {
    max = a[i];
  } else {
    continue;
  }
}

console.log(max);

