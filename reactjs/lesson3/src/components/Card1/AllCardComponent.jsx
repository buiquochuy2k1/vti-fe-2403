const cards = [
  {
    id: '1',
    image: 'https://picsum.photos/200/300',
    title: 'ReactJS là gì?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat dolores ut cupiditate ea consequuntur. Dolorum quo impedit minima officia assumenda debitis vero. Hic soluta, porro dignissimos doloremque dolorem pariatur!',
  },
  {
    id: '2',
    image: 'https://picsum.photos/200/300',
    title: 'Học ReactJS trong bao lâu?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat dolores ut cupiditate ea consequuntur. Dolorum quo impedit minima officia assumenda debitis vero. Hic soluta, porro dignissimos doloremque dolorem pariatur!',
  },
  {
    id: '3',
    image: 'https://picsum.photos/200/300',
    title: 'Học ReactJS ở đâu?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat dolores ut cupiditate ea consequuntur. Dolorum quo impedit minima officia assumenda debitis vero. Hic soluta, porro dignissimos doloremque dolorem pariatur!',
  },
];

function Card1() {
  return (
    <div className=" flex flex-wrap gap-10 justify-center items-center">
      {cards.map((item, index) => {
        return (
          <>
            <div className=" w-[300px] h-[600px]" key={item.id}>
              <h1 className=" font-bold text-sky-400 text-xl mb-3">{item.title}</h1>
              <img className=" w-[300px] h-[300px] bg-center mb-3" src="https://picsum.photos/200/300?grayscale" alt="" />
              <h2 className=" font-bold text-sky-400 mb-3">Số thứ tự {index}</h2>
              <p>{item.description}</p>
              <button className=" px-2 bg-sky-700 rounded-[12px] float-right text-slate-50 ">Đọc thêm...</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card1;
