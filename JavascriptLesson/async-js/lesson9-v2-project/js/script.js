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
  sidebarHTML.innerHTML = '<h1><strong>Loading</strong></h1>';

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
  sidebarHTML.innerHTML = '<h1><strong>Loading</strong></h1>';

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
  sidebarHTML.innerHTML = '<h1><strong>Loading</strong></h1>';

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
  sidebarHTML.innerHTML = '<h1><strong>Loading</strong></h1>';

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
  sidebarHTML.innerHTML = '<h1><strong>Loading</strong></h1>';

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

function GetPostCardDetail(PostCardDetail) {
  document.getElementById('myModal').style.display = 'block';

  modalHeader.innerHTML = `<h2><strong>Data</strong> User ID</strong>: ${PostCardDetail.userId}</h2>`;

  modalBody.innerHTML = `
  <div class="modal-content_text">
    <p><strong>ID</strong>: ${PostCardDetail.id}</p>
    <p><strong>Title</strong>: ${PostCardDetail.title}</p>
    <p><strong>Body</strong>: ${PostCardDetail.body}</p>
  </div>`;
}

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
