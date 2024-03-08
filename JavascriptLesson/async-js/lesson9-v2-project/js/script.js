const sidebarHTML = document.querySelector('.sidebar');

sidebarHTML.innerHTML = '<h1><strong>Please Select Data To View</strong></h1>';

// ---------------------------------------------------------------------------------------
// KHAI BÁO DỮ LIỆU
const BASE_API_LINK = 'https://jsonplaceholder.typicode.com/';
const modalHeader = document.querySelector('.modal-header');
const modalBody = document.querySelector('.modal-body');

// ------------------------------------------------------------------------------------------
/// KHAI BÁO TẤT CẢ API = DỮ LIỆU TRẢ VỀ DẠNG JSON
const getAllPostAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/posts`);
  const data = response.json();
  return data;
};

const getAllCommentAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/comments`);
  const data = response.json();
  return data;
};

const getAllAlbumAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/albums`);
  const data = response.json();
  return data;
};
const getAllPhotoAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/photos`);
  const data = response.json();
  return data;
};

const getAllTodoAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/todos`);
  const data = response.json();
  return data;
};
const getAllUsersAPI = async () => {
  const response = await fetch(`${BASE_API_LINK}/users`);
  const data = response.json();
  return data;
};
// -----------------------------------------------------------------------------\\
//NHẬN DỮ LIỆU TỪ CÁC NÚT BẤM
function GetPostData() {
  sidebarHTML.innerHTML = '<h1><strong>Loading...</strong></h1>';

  getAllPostAPI()
    .then((dataAPI) => {
      sidebarHTML.innerHTML = CreatePostCardList(dataAPI);
    })
    .catch((err) => {
      console.log(err);
      sidebarHTML.innerHTML = '<h2><strong>Something went wrong</strong></h2>';
    });
}
function GetCommentData() {
  sidebarHTML.innerHTML = '<h1><strong>Loading...</strong></h1>';

  getAllCommentAPI()
    .then((dataAPI) => {
      sidebarHTML.innerHTML = CreateCommentCardList(dataAPI);
    })
    .catch((err) => {
      console.log(err);
      sidebarHTML.innerHTML = '<h2><strong>Something went wrong</strong></h2>';
    });
}
function GetPhotoData() {
  sidebarHTML.innerHTML = '<h1><strong>Loading...</strong></h1>';

  getAllPhotoAPI()
    .then((dataAPI) => {
      sidebarHTML.innerHTML = CreatePhotoCardList(dataAPI);
    })
    .catch((err) => {
      console.log(err);
      sidebarHTML.innerHTML = '<h2><strong>Something went wrong</strong></h2>';
    });
}
function GetTodoData() {
  sidebarHTML.innerHTML = '<h1><strong>Loading...</strong></h1>';

  getAllTodoAPI()
    .then((dataAPI) => {
      sidebarHTML.innerHTML = CreateTodoCardList(dataAPI);
    })
    .catch((err) => {
      console.log(err);
      sidebarHTML.innerHTML = '<h2><strong>Something went wrong</strong></h2>';
    });
}
function GetUserData() {
  sidebarHTML.innerHTML = '<h1><strong>Loading...</strong></h1>';

  getAllUsersAPI()
    .then((dataAPI) => {
      sidebarHTML.innerHTML = CreateUserCardList(dataAPI);
    })
    .catch((err) => {
      console.log(err);
      sidebarHTML.innerHTML = '<h2><strong>Something went wrong</strong></h2>';
    });
}
function ReloadPage() {
  alert('Reload page thành công');
  location.reload();
}
// -------------------------------------------------------------------------------\\
// TẠO DỮ LIỆU CARD DATA
function generatePostCard(item, index) {
  return `
  <div class="main-content__button__card__item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
    <h2><strong>User ID</strong>: ${item.userId}</h2>
    <p><strong>ID</strong>: ${item.id}</p>
    <p><strong>Title</strong>: ${item.title}</p>
    <p><strong>Body</strong>: ${item.body}</p>
    <a class="buttonViewDetail" onclick='GetPostCardDetail(${JSON.stringify(item)})'><span class="buttonViewDetailspan">View Detail</span></a>
  </div>
  `;
}

function generateCommentCard(item, index) {
  return `
    <div class="main-content__button__card__item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
      <h2><strong>Post ID</strong>: ${item.postId}</h2>
      <p><strong>Name</strong>: ${item.name}</p>
      <p><strong>Email</strong>: ${item.email}</p>
      <p><strong>Body</strong>: ${item.body}</p>
      <a class="buttonViewDetail" onclick='GetCommentCardDetail(${JSON.stringify(item)})'><span class="buttonViewDetailspan">View Detail</span></a>
    </div>
    `;
}

function generatePhotoCard(item, index) {
  return `
    <div class="main-content__button__card__item">
      <h2><strong>Album ID</strong>: ${item.albumId}</h2>
      <p><strong>ID</strong>: ${item.id}</p>
      <p><strong>Title</strong>: ${item.title}</p>
      <p><strong>URL</strong>: ${item.url}</p>
      <p><strong>Thumbnail URL</strong>: ${item.thumbnailUrl}</p>
      <a class="buttonViewDetail" onclick='GetPhotoCardDetail(${JSON.stringify(item)})'><span class="buttonViewDetailspan">View Detail</span></a>
    </div>
    `;
}

function generateTodoCard(item, index) {
  return `
    <div class="main-content__button__card__item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
      <h2><strong>User ID</strong>: ${item.userId}</h2>
      <p><strong>ID</strong>: ${item.id}</p>
      <p><strong>Title</strong>: ${item.title}</p>
      <p><strong>Status</strong>: ${item.completed ? 'Done' : 'Not Done'}</p>
      <a class="buttonViewDetail" onclick='GetTodoCardDetail(${JSON.stringify(item)})'><span class="buttonViewDetailspan">View Detail</span></a>
    </div>
    `;
}

function generateUserCard(item, index) {
  return `
    <div class="main-content__button__card__item animate__animated animate__fadeInDown" style="animation-delay: ${index * 0.2}s;">
      <h2><strong>ID</strong>: ${item.id}</h2>
      <p><strong>Username</strong>: ${item.username}</p>
      <p><strong>Email</strong>: ${item.email}</p>
      <p><strong>Phone</strong>: ${item.phone}</p>
      <a class="buttonViewDetail" onclick='GetUserCardDetail(${JSON.stringify(item)})'><span class="buttonViewDetailspan">View Detail</span></a>

    </div>
    `;
}
// ---------------------------------------------------------------------------------------\\
// TẠO DỮ LIỆU DATA
function CreatePostCardList(dataPost) {
  return `
  <div class="main-content__button__card">  
    ${dataPost.map((item, index) => generatePostCard(item, index)).join('')}
  </div>
`;
}

function CreateCommentCardList(dataComment) {
  return `
    <div class="main-content__button__card">
        ${dataComment.map((item, index) => generateCommentCard(item, index)).join('')}
    </div>`;
}

function CreatePhotoCardList(dataPhoto) {
  return `<div class="main-content__button__card">
    ${dataPhoto.map((item, index) => generatePhotoCard(item, index)).join('')}</div>`;
}

function CreateTodoCardList(dataTodo) {
  return `<div class="main-content__button__card">${dataTodo.map((item, index) => generateTodoCard(item, index)).join('')}`;
}

function CreateUserCardList(dataUser) {
  return `
    <div class="main-content__button__card">${dataUser.map((item, index) => generateUserCard(item, index)).join('')}`;
}

// --------------------------------------------------------------------------------\\
// TẠO CÁC FUNTION NÚT BẤM KHI NGƯỜI DÙNG NHẤN VÀO VIEW DETAIL

function GetPostCardDetail(postCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong> User ID</strong>: ${postCardDetail.userId}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>ID</strong>: ${postCardDetail.id}</p>
    <p><strong>Title</strong>: ${postCardDetail.title}</p>
    <p><strong>Body</strong>: ${postCardDetail.body}</p>
    <a class="buttonViewDetail" onclick='logModalDetail(${JSON.stringify(postCardDetail)})'><span class="buttonViewDetailspan">Log Data</span></a>
    <a class="buttonClose" onclick='closeModal()'><span class="buttonClosespan">Close</span></a>
  </div>`;
}

function GetCommentCardDetail(commentCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong>Post ID</strong>: ${commentCardDetail.postId}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>Name</strong>: ${commentCardDetail.name}</p>
    <p><strong>Email</strong>: ${commentCardDetail.email}</p>
    <p><strong>Body</strong>: ${commentCardDetail.body}</p>
    <a class="buttonViewDetail" onclick='logModalDetail(${JSON.stringify(commentCardDetail)})'><span class="buttonViewDetailspan">Log Data</span></a>
    <a class="buttonClose" onclick='closeModal()'><span class="buttonClosespan">Close</span></a>
  </div>`;
}

function GetPhotoCardDetail(photoCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong>Album ID</strong>: ${photoCardDetail.albumId}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>ID</strong>: ${photoCardDetail.id}</p>
    <p><strong>Title</strong>: ${photoCardDetail.title}</p>
    <p><strong>URL</strong>: ${photoCardDetail.url}</p>
    <p><strong>Thumbnail URL</strong>: ${photoCardDetail.thumbnailUrl}</p>
    <a class="buttonViewDetail" onclick='logModalDetail(${JSON.stringify(photoCardDetail)})'><span class="buttonViewDetailspan">Log Data</span></a>
    <a class="buttonClose" onclick='closeModal()'><span class="buttonClosespan">Close</span></a>
  </div>`;
}

function GetTodoCardDetail(TodoCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong>User ID</strong>: ${TodoCardDetail.userId}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>ID</strong>: ${TodoCardDetail.id}</p>
    <p><strong>Title</strong>: ${TodoCardDetail.title}</p>
    <p><strong>Status</strong>: ${TodoCardDetail.completed ? 'Done' : 'Not Done'}</p>
    <a class="buttonViewDetail" onclick='logModalDetail(${JSON.stringify(TodoCardDetail)})'><span class="buttonViewDetailspan">Log Data</span></a>
    <a class="buttonClose" onclick='closeModal()'><span class="buttonClosespan">Close</span></a>
  </div>

  `;
}

function GetUserCardDetail(UserCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong>User ID</strong>: ${UserCardDetail.id}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>Name</strong>: ${UserCardDetail.name}</p>
    <p><strong>Username</strong>: ${UserCardDetail.username}</p>
    <p><strong>Email</strong>: ${UserCardDetail.email}</p>
    <p><strong>Phone</strong>: ${UserCardDetail.phone}</p>
    <P><strong>Website</strong>: ${UserCardDetail.website}</p>
    <ul><strong>---------Address----------<//strong>
      <li><strong>Street</strong>: ${UserCardDetail.address.street}</li>
      <li><strong>Suite</strong>: ${UserCardDetail.address.suite}</li>
      <li><strong>City</strong>: ${UserCardDetail.address.city}</li>
      <li><strong>Zipcode</strong>: ${UserCardDetail.address.zipcode}</li>
    </ul>
    <P></p>
    <ul><strong>---------Company----------</strong>
      <li><strong>Company Name</strong>: ${UserCardDetail.company.name}</li>
      <li><strong>Company Catch Phrase</strong>: ${UserCardDetail.company.catchPhrase}</li>
      <li><strong>Company BS</strong>: ${UserCardDetail.company.bs}</li>
    </ul>

    <a class="buttonViewDetail" onclick='logModalDetail(${JSON.stringify(UserCardDetail)})'><span class="buttonViewDetailspan">Log Data</span></a>
    <a class="buttonClose" onclick='closeModal()'><span class="buttonClosespan">Close</span></a>
  </div>`;
}

function logModalDetail(data) {
  alert('Đã xuất thông tin, vào F12 > Console để xem');
  console.log('------------DỮ LIỆU ĐÃ XUẤT-----------------');
  console.log(data);
  console.log('--------------------------------------------');
  closeModal();
}
// --------------------------------------------------------------------------------------------\\
// FUNCTION ĐỂ ĐÓNG MODAL
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// TẮT MODAL KHI NHẤN RA NGOÀI MODAL
window.onclick = function (event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    closeModal();
  }
};
