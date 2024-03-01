const myName = "Anonymous";
console.log(`My name is ${myName}`);

const myArr = ["a", "b", "c", "d"];
// const firstItem = myArr[0]
// const secondItem = myArr[1]
// const thirdItem = myArr[2]
// const fourthItem = myArr[3]
const [firstItem, secondItem, thirdItem, fourthItem] = myArr;
console.log(`first item: `, firstItem);
console.log(`second item: `, secondItem);
console.log(`third item: `, thirdItem);
console.log(`fourth item: `, fourthItem);

const person = {
  fullName: "anson ngo",
  age: 50, // 50 props
};
const car = {
  id: 1,
  carName: "bmw",
};
const house = {
  location: "hanoi",
  price: 1_000_000_000,
};
// const myCar = {
//     fullName: person.fullName,
//     age: person.age,
//     id: car.id,
//     carName: car.carName
//     // 50 more props
// }
const myCar = {
  ...person,
  ...car,
  ...house,
};
console.log(myCar);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr12 = [...arr1, ...arr2];
console.log(arr12); // [1,2,3,4,5,6,7,8]
