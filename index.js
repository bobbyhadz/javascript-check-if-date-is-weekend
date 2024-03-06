// EXAMPLE 1 - Check if a Date is during the Weekend using JavaScript

function isWeekend(date = new Date()) {
  return date.getDay() === 6 || date.getDay() === 0;
}

const d1 = new Date('2022-09-24');
console.log(d1); // 👉️ Saturday Sep 24 2022

console.log(d1.getDay()); // 👉️ 6

console.log(isWeekend(d1)); // 👉️ true

const d2 = new Date('2022-09-23');
console.log(d2); // 👉️ Friday Sep 23 2022

console.log(isWeekend(d2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Date is during the Weekend using modulo % operator

// function isWeekend(date = new Date()) {
//   return date.getDay() % 6 === 0;
// }

// const d1 = new Date('2022-09-24');
// console.log(d1); // 👉️ Saturday Sep 24 2022

// console.log(isWeekend(d1)); // 👉️ true

// const d2 = new Date('2022-09-23');
// console.log(d2); // 👉️ Friday Sep 23 2022

// console.log(isWeekend(d2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Date is a Monday using JavaScript

// function isMonday(date = new Date()) {
//   return date.getDay() === 1;
// }

// const d1 = new Date('2022-09-19');
// console.log(d1); // 👉️ Mon Sep 19 2022
// console.log(d1.getDay()); // 👉️ 1

// console.log(isMonday(d1)); // 👉️ true

// const d2 = new Date('2022-09-20');
// console.log(d2); // 👉️ Tue Sep 20 2022
// console.log(d2.getDay()); // 👉️ 2

// console.log(isMonday(d2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Date is the Monday of the Current Week

// function isMondayOfCurrentWeek(date = new Date()) {
//   const today = new Date();
//   const first = today.getDate() - today.getDay() + 1;
//   const monday = new Date(today.setDate(first));

//   return monday.toDateString() === date.toDateString();
// }

// const today = new Date();
// const first = today.getDate() - today.getDay() + 1;
// const currentMonday = new Date(today.setDate(first));

// console.log(isMondayOfCurrentWeek(currentMonday)); // 👉️ true

// const date = new Date('2022-09-24');
// console.log(date); // 👉️ Sat Sep 24 2022

// console.log(isMondayOfCurrentWeek(date)); // 👉️ false
