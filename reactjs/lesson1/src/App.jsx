import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
// import Fragment from './components/Fragment';
// import AllCardComponent from './components/Card1/AllCardComponent';
// import FormQ4 from './components/Form/FormQ4';
// import FormQ5 from './components/Form/FormQ5';
// import LifeCycle from './components/LifeCycle/LifeCycle';

function App() {
  // const [counter, setCounter] = useState(0);

  const [data, setDataAPI] = useState(null);
  console.log(data);
  useEffect(() => {
    console.log('useEffect');
    const fetchdata = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const result = await response.json();
        setDataAPI(result);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        {/* <AllCardComponent />
        <Fragment /> */}
        {/* <FormQ4 /> */}
        {/* <FormQ5 /> */}

        {/* <LifeCycle counter={counter} />
        <button
          className="bg-black p-4 text-white rounded-lg"
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          Click
        </button> */}
        <div>
          {data?.data?.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item.id}</li>
                <li>{item.email}</li>
                <li>{item.first_name}</li>
                <li>{item.last_name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
