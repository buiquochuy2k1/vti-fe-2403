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

// let squaredNumbers = numbers.map(function (num) {
//     return num * num;
// })

// let newArr = numbers.map(function (itemInNumbers) {
//     const newItemValue = itemInNumbers + 1
//     return newItemValue
// })

// console.log("Numbers ", numbers)
// console.log("New Arr", newArr)
// console.log(squaredNumbers)


// 3. Filter Filters elements based on a condition and returns new array 



// 4. find: Returns  the first elements that satisfies a condition
const numbersList = [10 , -1, , 1, 5 , ,32 ,5]

let numb = numbersList.find(function (item){
    return item < 25
})

console.log(numb)


// 5. reduce: Reduces the array to a single value (eg: sum, average)

