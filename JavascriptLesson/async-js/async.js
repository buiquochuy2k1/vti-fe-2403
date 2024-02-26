function CallBackAsync() {
  setTimeout(() => {
    console.log("đang làm việc 1...");
    setTimeout(() => {
      console.log("đang làm việc 2....");
      setTimeout(() => {
        console.log("đang làm việc 3...");
        setTimeout(() => {
          console.log("đang làm việc 4....");
          setTimeout(() => {
            console.log("đang làm việc 5....");
            setTimeout(() => {
              console.log("đang làm việc 6....");
              setTimeout(() => {
                console.log("đang làm việc 7....");
                setTimeout(() => {
                  console.log("đang làm việc 8....");
                  setTimeout(() => {
                    console.log("đang làm việc 9....");
                    setTimeout(() => {
                      console.log("đang làm việc 10....");
                    }, 10000);
                  }, 9000);
                }, 8000);
              }, 7000);
            }, 6000);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}

// CallBackAsync();

//promise thuộc es7

// EXAMPLE 1
// const myPromise = new Promise((resolve, reject) => {});
// console.log(typeof myPromise);
// console.log(myPromise);

//EXAMPLE 2
// const newPromise = new Promise((resolve, reject) => {
//   // xử lý bất đồng bộ ở đây
//   // fullfiled - xử lý bất đồng thì chạy resolve
//   //   resolve();
//   //   rejected - xử lý bất đồng bộ không thành công thì chạy reject
//   reject("lỗi hiển thị");
// });

// const FullFilledCallBack = (data) => {
//   console.log("xử lý bất đồng bộ thành công: ", data);
// };
// const ReJectCallBack = (err) => {
//   console.log("Xử lý bất đồng bộ không thành công: ", err);
// };
// const SuccessAfterCallBack = () => {
//   console.log("Chắc chắn khi xử lý bất đồng bộ thì ở đây sẽ chạy");
// };

// newPromise
//   .then((data) => FullFilledCallBack(data))
//   .catch((err) => ReJectCallBack(err))
//   .finally(SuccessAfterCallBack);

// EXAMPLE 3 - BASE PROMISE
const Ex3Promise = new Promise((resolve, reject) => {
  const isSuccessFul = false;

  if (isSuccessFul) {
    // resolve(); // xử lý thành công undefined
    resolve({ id: 1, user: "Anonymouse" }); // xử lý thành công nhưng có object
  } else {
    // reject(); // xử lý thất bại undefined
    reject("Thất bại"); // xử lý thất bại nhưng báo lỗi
  }
});

Ex3Promise.then((data) => {
  // xu ly khi nhan data
  console.log("xử lý thành công: ", data);
})
  .catch((err) => {
    //xy ly khi xay ra loi
    console.log("Xử lý thất bại: ", err);
  })
  .finally(() => {});
