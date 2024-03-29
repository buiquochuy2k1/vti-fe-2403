const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener('click', function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove('active');
    });
    li.classList.add('active');
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
  sidebar.classList.toggle('hide');
});

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle('show');
    if (searchForm.classList.contains('show')) {
      searchButtonIcon.classList.replace('bx-search', 'bx-x');
    } else {
      searchButtonIcon.classList.replace('bx-x', 'bx-search');
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace('bx-x', 'bx-search');
  searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
  }
});

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

// KẾT THÚC UI DESIGN
// ---------------------------------------------------------------------------------\\

// KHAI BÁO DỮ LIỆU
const BASE_API_LINK = 'https://65e8640b4bb72f0a9c4f2b4a.mockapi.io/api';
const contentText = document.querySelector('.content-data-box');

const modalHeader = document.querySelector('.modal-header');
const modalBody = document.querySelector('.modal-body');
const modalCreateBody = document.querySelector('.modalCreate-body');
const modalDeleteBody = document.querySelector('.modalDelete-body');
const modalEditBody = document.querySelector('.modalEdit-body');

// DÒNG NÀY SẼ CHẠY KHI BẮT ĐẦU MỞ WEB
contentText.innerHTML = '<h1><strong>Please select data.</strong></h1>';

// ------------------------------------------------------------------------------------------
/// KHAI BÁO TẤT CẢ API = DỮ LIỆU TRẢ VỀ DẠNG JSON
const getAllProductsFromAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/products`);
  const data = response.json();
  return data;
};

const getAllUsersFromAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/users`);
  const data = response.json();
  return data;
};

/// TẠO NỘI DUNG CARD
function generateProductList(item, index) {
  return `
        <div class="content-card-item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
          <h2><strong>Product ID</strong>: ${item.id}</h2>
          <p><strong>Product Name</strong>: ${item.productName}</p>
          <p><strong>Price</strong>: ${item.price}</p>
          <p><strong>Is Used</strong>: ${item.isUsed ? '2ND' : 'NEW'}</p>
          <button class="button-9" onclick='getProductDetail(${JSON.stringify(item)})'>Vỉew Detail</button>
        </div>
  `;
}

function generateUserList(item, index) {
  return `
        <div class="content-card-item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
          <h2><strong>UserID</strong>: ${item.id}</h2>
          <p><strong>UserName</strong>: ${item.name}</p>
          <p><strong>IPv4</strong>: ${item.ipv4}</p>
          <p><strong>IPv6</strong>: ${item.ipv6}</p>
          <button class="button-9" onclick='getUserDetail(${JSON.stringify(item)})'>Vỉew Detail</button>
        </div>
  `;
}

// TẠO DỮ LIỆU CARD LIST
function createProductCardList(dataCard) {
  return `
      <div class="content-card-list">  
        ${dataCard.map((item, index) => generateProductList(item, index)).join('')}
      </div>
`;
}

function createUserCardList(dataUsers) {
  return `
    <div class="content-card-list">
      ${dataUsers.map((item, index) => generateUserList(item, index)).join('')}
    </div>
  `;
}

// FUNCTION NHẤN NÚT
function getProducts() {
  contentText.innerHTML = '<h1><strong>Loading data....</strong></h1>';

  getAllProductsFromAPI()
    .then((data) => {
      contentText.innerHTML = createProductCardList(data);
    })
    .catch((err) => {
      console.log(err);
      contentText.innerHTML = '<h1><strong>Something went wrong. Retry later</strong></h1>';
    });
}

function getUsers() {
  contentText.innerHTML = '<h1><strong>Loading data....</strong></h1>';

  getAllUsersFromAPI()
    .then((data) => {
      contentText.innerHTML = createUserCardList(data);
    })
    .catch((err) => {
      console.log(err);
      contentText.innerHTML = '<h1><strong>Something went wrong. Retry later</strong></h1>';
    });
}

async function sortDataIPv4() {
  contentText.innerHTML = '<h1><strong>Loading data....</strong></h1>';

  getAllUsersFromAPI()
    .then((data) => {
      data.sort((a, b) => b.ipv4.length - a.ipv4.length);
      contentText.innerHTML = createUserCardList(data);
    })
    .catch((err) => {
      console.log(err);
      contentText.innerHTML = '<h1><strong>Something went wrong. Retry later</strong></h1>';
    });
}
function getHomePage() {
  contentText.innerHTML = '<h1><strong>Please select data.</strong></h1>';
}

function reloadPage() {
  alert('Bạn đã reload trang thành công');
  location.reload();
}

// --------------------------------------------------------------------------------\\
// TẠO CÁC FUNTION NÚT BẤM KHI NGƯỜI DÙNG NHẤN VÀO VIEW DETAIL

function getProductDetail(data) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong> Product ID</strong>: ${data.id}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <img src="${data.productImage}"></img>
    <p><strong>Product Name</strong>: ${data.productName}</p>
    <p><strong>Price</strong>: ${data.price}</p>
    <p><strong>Is Used</strong>: ${data.isUsed ? '2ND' : 'NEW'}</p>
    <p><strong>Discount</strong>: <span style="color: red">${data.discount}%</span></p>
    <button class="button-9" onclick='closeModal()'>Close</button>
    <button class="button-9" onclick='openEditData()'>Edit</button>
  </div>`;
}

function getUserDetail(data) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong> User ID</strong>: ${data.id}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <img src="${data.avatar}"></img>
    <p><strong>UserName</strong>: ${data.name}</p>
    <p><strong>IPv4</strong>: ${data.ipv4}</p>
    <p><strong>IPv6</strong>: ${data.ipv6}</p>
    <p><strong>Work Place</strong>: ${data.workplace}</p>
    <p><strong>Create At</strong>: <span style="color: red">${data.createdAt}%</span></p>
    <button class="button-9" onclick='closeModal()'>Close</button>
    <button class="button-9" onclick='console.log(${JSON.stringify(data)})'>Edit</button>
  </div>`;
}

// --------------------------------------------------------------------------------------------\\
// FUNCTION ĐỂ ĐÓNG MODAL
function closeModalDelete() {
  document.getElementById('myModalDelete').style.display = 'none';
}

function closeModalCreate() {
  document.getElementById('myModalCreate').style.display = 'none';
}

function closeModalEdit() {
  document.getElementById('myModalEdit').style.display = 'none';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// TẮT MODAL KHI NHẤN RA NGOÀI MODAL
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  var modalCreate = document.getElementById('myModalCreate');
  var modalDelete = document.getElementById('myModalDelete');
  var modalEdit = document.getElementById('myModalEdit');

  if (event.target == modal) {
    closeModal();
  }
  if (event.target == modalCreate) {
    closeModalCreate();
  }
  if (event.target == modalDelete) {
    closeModalDelete();
  }
  if (event.target == modalEdit) {
    closeModalEdit();
  }
};

console.log('------------------------------');
console.log('File mainScript.js is running');
