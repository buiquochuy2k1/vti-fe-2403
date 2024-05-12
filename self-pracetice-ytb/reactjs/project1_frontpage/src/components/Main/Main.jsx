const Main = () => {
  return (
    <>
      <section className="w-full h-[600px] mt-10 p-10 grid grid-cols-2">
        <div>
          <h1 className="font-bold text-wrap text-8xl">YOUR FEET DESERVE THE BEST</h1>
          <p className="pt-4 w-[400px] h-[90px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST
            AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="flex gap-5 mt-6">
            <button className="bg-red-500 p-2 w-[100px] text-white font-bold">Shop Now</button>
            <button className="p-2 w-[100px] border-solid border-2 border-slate-500 font-bold">
              Category
            </button>
          </div>
          <div className="mt-10">
            <p>Also Available On</p>
            <div className="flex gap-5 mt-3">
              <img src="../assets/amazon.png" alt="" />
              <img src="../assets/flipkart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="../assets/shoe_image.png" alt="" srcSet="" />
        </div>
      </section>
    </>
  );
};

export default Main;
