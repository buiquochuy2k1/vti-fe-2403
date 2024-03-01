const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");
const DeleteTaskButton = document.getElementsByClassName("buttonremoveall");

function addTask(params) {
  if (InputBox.value === "") {
    alert("Bạn cần nhập gì đó");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  SaveData();
}

ListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);

function SaveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function ShowTask() {
  ListContainer.innerHTML = localStorage.getItem("data");
}

function deleteAllTask(params) {
  InputBox.value = "";
  alert("Tính năng đang phát triển");
}

ShowTask();
