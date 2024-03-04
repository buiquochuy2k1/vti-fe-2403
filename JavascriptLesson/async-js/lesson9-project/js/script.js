// Hiển thị loading
const contentDiv = document.querySelector(".content");
contentDiv.innerHTML = `
      <h1>Loading...</h1>
  `;

//API LINK VÀ KHAI BÁO
const apiLink = "https://jsonplaceholder.typicode.com/users";
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Get data từ api link theo dạng json
const fetchDataListFromAPI = async () => {
  const response = await fetch(apiLink);
  return response.json();
};

const generateUserCard = (userInfo) => {
  //Tạo user card
  setTimeout(() => {}, 1000);
  return `
        <div class="modal__user animate__animated animate__fadeInDownBig">
            <p><strong>name</strong>: ${userInfo.name}</p>
            <p><strong>email</strong>: ${userInfo.email}</p>
            <p><strong>username</strong>: ${userInfo.username}</p>
            <p><strong>phone</strong>: ${userInfo.phone}</p>
            <button 
            class="shadow__btn" 
            onclick='ShowDetail(${JSON.stringify(userInfo)});'>
            Đọc thêm
            </button>
        </div>
    `;
};

function LogUserDetails(Information) {
  alert("Đã log thông tin. Vui lòng check ở console");
  console.log(Information);
  modal.style.display = "none";
}

function ShowDetail(userDetails) {
  //   console.log(userDetails);

  let UserInfo = document.getElementById("userInfo");
  UserInfo.innerHTML = `
  <div>
    <p><strong>name</strong>: ${userDetails.name}</p>
    <p><strong>email</strong>: ${userDetails.email}</p>
    <p><strong>username</strong>: ${userDetails.username}</p>
    <p><strong>phone</strong>: ${userDetails.phone}</p>
    <button 
    class="shadow__btn"
    style="margin-left: 45%;" 
    onclick='LogUserDetails(${JSON.stringify(userDetails)})'>
    Log thông tin
    </button>
  </div>

  `;
  modal.style.display = "block";
}

const generateUserCardList = (userList) => {
  // tạo danh sách card để có thể hiện ra
  //function generateUserCard(item) dùng để lấy thông tin từ api
  const content = `
            <div class="modal__usercard">
            ${userList.map((item) => generateUserCard(item))}
            </div>
        `;
  return content;
};

fetchDataListFromAPI().then((data) => {
  // thay data html của class content sang các card chứa thông tin
  contentDiv.innerHTML = generateUserCardList(data);
});

//function click nút tắt
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

span.onclick = function () {
  modal.style.display = "none";
};
