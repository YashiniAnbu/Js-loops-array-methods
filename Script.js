// Looping Through an Array
const numbers = [10, 20, 30, 40];
// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// forEach
numbers.forEach(function(num) {
  console.log(num);
});
// for...of
for (let num of numbers) {
  console.log(num);
}
// for...in
for (let index in numbers) {
  console.log(numbers[index]);
}


// Loop Through an Object
const student = {
  name: "Bala",
  age: 21,
  grade: "A"
};
for (let key in student) {
  console.log(key, student[key]);
}


// Using map()
const marks = [50, 60, 70, 80];
const reducedMarks = marks.map(function(mark) {
  return mark - 10;
});
console.log(reducedMarks); 


//Using filter()
const values = [5, 12, 8, 25, 3, 15];
const filteredValues = values.filter(function(value) {
  return value > 10;
});
console.log(filteredValues); 


// 5 — Using reduce()
const nums = [5, 10, 15, 20];
const totalSum = nums.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(totalSum); 
