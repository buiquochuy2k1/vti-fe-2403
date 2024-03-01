// cách 1
// getElementById
const FirstBox = document.getElementById("first-box");

const item1 = FirstBox.firstElementChild;
// const item1 = FirstBox.children[0 ]

item1.style.backgroundColor = "yellow";

//cách 2
// getElementsByClassName

const subContainerList = document.getElementsByClassName("sub-container");
const firtElement = subContainerList[0];

// cách 3
// document.querySelector()
const firstBox = document.querySelector("#first-box");
const seccondItem = firstBox.lastElementChild;
seccondItem.style.backgroundColor = "blue";
