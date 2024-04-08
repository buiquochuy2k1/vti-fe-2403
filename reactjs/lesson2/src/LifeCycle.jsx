import { useEffect, useState } from 'react';

export const LifeCycle = () => {
  const [count, setCount] = useState(0);

  //  ---------------------- MOUNTING-----------------------------\\
  //   C1: MỖI LẦN HOOK THAY ĐỔI THÌ SẼ CHẠY useEffect(callback)
  //   useEffect(() => {
  //     console.log('running everytime re-render');
  //   });

  //   C2: CHẠY KHI MỚI KHỞI ĐẦU (1 LẦN) useEffect(callback, [])
  useEffect(() => {
    console.log('run 1 time when component mounting');
  }, []);

  //   C3: PHẢI CÓ DEPENDENCIES useEffect(callback, [item1, item2, ...])
  //   useEffect(() => {
  //     console.log('run 1 time when component mounting and when count is change');
  //   }, [count]);

  //  ---------------------- UNMOUNTING----------------------------- \\

  //   C1: MỖI LẦN UNMOUNTING THAY ĐỔI THÌ SẼ CHẠY useEffect(return () = {})
  //   useEffect(() => {
  //     //unmounting
  //     return () => {
  //       console.log('unmounting LifeCycle');
  //     };
  //   });

  //   C2: MỖI LẦN UNMOUNTING THAY ĐỔI THÌ SẼ CHẠY useEffect(return () = {}, [])
  useEffect(() => {
    //unmounting
    return () => {
      console.log('unmounting LifeCycle 2 ');
    };
  }, []);

  //   C3: PHẢI CÓ DEPENDENCIES useEffect(return () = {}, [item1, item2, ...])
  //   useEffect(() => {
  //     //unmounting
  //     return () => {
  //       console.log('unmounting LifeCycle 3');
  //     };
  //   }, [count]);

  function handleIncrease() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function handleDecrease() {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>
      {/* {console.log('test')} */}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
