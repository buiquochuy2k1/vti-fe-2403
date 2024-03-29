let number1 = 1;
let number2 = number1;

number1 += 10
console.log('number1: ', number1) // 11
console.log('number2: ', number2) // 1

//////////////////////////////////

let str1 = "hello"
let str2 = str1;

str1 = 'hi'
console.log('str1: ', str1) // hi
console.log('str2: ', str2) // hello


//////////////////////////////////
let student1 = {id: 1}
let student2 = student1

student1.id = 2

console.log("student1: ", student1) // {id: 2}
console.log("student2: ", student2) // {id: 1} thực tế => {id: 2}


//////////////////////////////////
let arr1 = [1]
let arr2 = arr1

arr1.push(2)

console.log("array1 ", arr1)
console.log("array2 ", arr2)
