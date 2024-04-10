import './App.css';
import Fragment from './components/Fragment';
import AllCardComponent from './components/Card1/AllCardComponent';

function App() {
  return (
    <>
      <div className="h-screen px-4 py-8 transition-all overscroll-y-auto">
        <AllCardComponent />
        <Fragment />
      </div>
    </>
  );
}

export default App;
