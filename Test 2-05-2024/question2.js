// 2. Print unique values from an array

// [1, 2, 3, 3, 4, 5, 5]

// Ans: [ 1, 2, 3, 4, 5 ]

const array = [1, 2, 3, 3, 4, 5, 5];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
