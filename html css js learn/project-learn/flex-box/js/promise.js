// ----------------------------------------------------------------
// BÀI TẬP PROMISE

function RunPromise() {
  console.log("đang chạy promise 1");
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDone = true;
      if (isDone) {
        resolve();
        setTimeout(() => {
          const promise3 = new Promise((resolve, reject) => {
            const isDone = true;
            if (isDone) {
              resolve();
              const promise4 = new Promise((resolve, reject) => {
                setTimeout(() => {
                  const isDone = true;
                  if (isDone) {
                    resolve();
                    const promise2 = new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const isDone = true;
                        if (isDone) {
                          resolve();
                        } else {
                          reject();
                        }
                      }, 1000);
                    });

                    promise2.then((e) => {
                      console.log("hoàn tất thực thi lệnh");
                      console.log("----------------------");
                    });
                  } else {
                    reject();
                  }
                }, 1000);
              });
              promise4.then((e) => {
                console.log("đã chạy xong promise 4");
                console.log("đang chạy promise 2");
              });
            } else {
              reject();
            }
          });
          promise3.then((e) => {
            console.log("đã chạy xong promise 3");
            console.log("đang chạy promise 4");
          });
        }, 1000);
      } else {
        reject();
      }
    }, 1000);
  });

  promise1.then((e) => {
    console.log("đã chạy xong promise 1");
    console.log("đang chạy promise 3");
  });
}

// RunPromise();

const getUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = response.json();
  return userList;
};

getUserList().then((data) => {
  console.log(data);
});
