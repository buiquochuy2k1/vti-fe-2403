var num = 1;
let intro = "hello world"
const NUMBER_OF_STUDENT = 100;

console.log("number: ", num);
console.log("intro: ", intro)
console.log("NUMBER_OF_STUDENT: ", NUMBER_OF_STUDENT)


//// var

// {
//     var x1 = 1; // có giá trị chạy được cả ở global và block scope, được khai báo lại nhiều lần
//     console.log("inblock " , x1)
// }
// console.log("global", x1)


//// let

// {
//     let x1 = 1; // block scope ( chỉ tồn tại ở trong block )
//     console.log("inblock " , x1)
// }
// console.log("global", x1)


//// const

// {
//     const x1 = 1; // block scope ( chỉ tồn tại ở trong block )
//     console.log("inblock " , x1)
// }
// console.log("global", x1)


// Phân biệt var let const
// - var : global scope , let & const : block scope
// - var, let: có thể thay đổi được, const: không thể thay đổi được
// - var: redeclared được, let & const: không thể redeclared

console.log(x)
var x = 100