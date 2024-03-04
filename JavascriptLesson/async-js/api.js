// -----------------------------KHAI BÁO---------------------
const getPostList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const getCommentList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
};

const getAlbumList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/albums");
  return response.json();
};

const getPhotoList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return response.json();
};

const getToDoList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

const getUserList = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// ------------------------------------------------------- \\

getPostList()
  .then((data) => {
    console.log(`/post ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

getCommentList()
  .then((data) => {
    console.log(`/comments ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

getAlbumList()
  .then((data) => {
    console.log(`/albums ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

getPhotoList()
  .then((data) => {
    console.log(`/photos ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

getToDoList()
  .then((data) => {
    console.log(`/todos ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

getUserList()
  .then((data) => {
    console.log(`/users ${data.length}`);
  })
  .catch((err) => {
    console.log("Đã xảy ra lỗi, vui lòng thử lại sau", err);
  });

//------------------------TEST---------------\\
Promise.all([
  getPostList(),
  getCommentList(),
  getAlbumList(),
  getPhotoList(),
  getToDoList(),
  getUserList(),
]).then((data) => {
  console.log(data.length);
});

// promise để dùng promise all
const mockAPI1 = new Promise((resolve, reject) => {
  // xu li cac hanh dong bat dong bo
  // setTimeout(resolve, 2000, {id: 1})
  setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 2000);
});
const mockAPI2 = new Promise((resolve, reject) => {
  // xu li cac hanh dong bat dong bo
  // setTimeout(resolve, 2000, {id: 1})
  setTimeout(() => resolve([{ id: 11 }, { id: 21 }]), 100);
});
const myNumber = 123; // mat 2s
Promise.all([mockAPI1, myNumber, mockAPI2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
