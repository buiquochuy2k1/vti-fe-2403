let numbers = [1,2,3,4,5]

//1. forEach: Interates through each elements of the array = for
/*
numbers.forEach(function (num){
    console.log(num)
})

for (let i = 0; i < numbers.length; i++) {
    console.log("i =", numbers[i])
}
*/


//2. map: Transform each elements  of the array and returns a new array 

let squaredNumbers = numbers.map(function (num) {
    return num * num;
})

let newArr = numbers.map(function (itemInNumbers) {
    const newItemValue = itemInNumbers + 1
    return newItemValue
})

console.log("Numbers ", numbers)
console.log("New Arr", newArr)
console.log(squaredNumbers)


// 3. Filter: Filters elements based on a condition and returns new array 


output: [1, 3, 5];
const myArr = []


numbers.forEach(function(itemInArray) {
    if (itemInArray % 2 === 1) {
        myArr.push(arr[i])
    }
})

// const myArr = numbers.filter(function (itemInArray) {
//   console.log("item in array: ", itemInArray);

//   return itemInArray % 2 === 1;
// });
// console.log(myArr);

// let evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers);

// 4. find: Returns  the first elements that satisfies a condition
const numbersList = [10 , -1, , 1, 5 , ,32 ,5]

let numb = numbersList.find(function (item){
    return item < 25
})

console.log(numb)


// 5. reduce: Reduces the array to a single value (e.g., sum, average)
[array].reduce(function (output, item) {
    return output + item
}, defaultValue)

let sum = numberList.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);


// 6. some: Checks if at least one element satisfies a condition
let hasEvenNumber = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber);


// 7. every: Checks if all elements satisfy a condition
let allEvenNumbers = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log(allEvenNumbers);



// 8. includes: Checks if an array includes a certain element
let includesThree = numbers.includes(3);
console.log(includesThree);


// 9. indexOf: Returns the index of the first occurrence of an element in the array
let index = numbers.indexOf(3); -1

console.log(index);


// 10. slice: Returns a shallow copy of a portion of an array into a new array
const myArrList = [1, 2, 32, 4, 56, 7, 8];
// output: [32,4,56] --> sub array trong myArrList
let slicedArray = myArrList.slice(2, 5);
console.log(slicedArray);


// 1. [inputArr].map --> return array có length = inputArr.length
// 2. [inputArr].filter --> return array có length <= inputArr.length
// 3. [inputArr].forEach --> k trả về gì, chỉ cho phép đi qua từng item trong inputArr
// 4. [inputArr].find     --> trả về item gần nhất thỏa mãn đk
// 5. [inputArr].includes(item) --> trả về true/false nếu inputArr có chứa item
// 6. [inputArr].some - [inputArr].every --> trả về true/false khi ít nhất 1 item thỏa mãn (some), khi mọi item thỏa mãn (every)