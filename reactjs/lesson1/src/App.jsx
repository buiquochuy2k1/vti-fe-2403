// import ComponentA from './components/ComponentA';
// import './App.css';

// function App() {
//   function helloWord() {
//     console.log('Hello');
//   }

//   const styleObject = {
//     border: '1px solid blue',
//     padding: '20px 20px',
//     fontSize: '20px',
//   };

//   const user = {
//     firstName: 'Bui Quoc',
//     lastName: 'Huy',
//     showFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   const firstName = 'Bui Quoc';
//   const lastName = 'Huy';
//   function getFullName(a, b) {
//     return `${a} ${b}`;
//   }
//   return (
//     <>
//       <div>
//         <h1>Hello World</h1>
//         <p>My first paragraph</p>
//       </div>
//       <div>
//         <h2>DANH SÁCH LỚP HỌC</h2>
//         <ol>
//           <li>
//             Cơm trưa
//             <ul>
//               <li>Cơm chiên hải sản</li>
//               <li>Cơm sườn non nấu cam</li>
//               <li>Cơm canh chua cá lóc</li>
//             </ul>
//           </li>
//           <li>
//             Tráng miệng trái cây
//             <ul>
//               <li>Nho tươi</li>
//               <li>Chuối</li>
//               <li>Mận</li>
//             </ul>
//           </li>
//         </ol>

//         <ol>
//           <li>Nguyễn Ngọc Duy</li>
//           <li>Tống Quang Anhh</li>
//           <li>Hà Văn Tiến</li>
//           <li>Đinh Thu Loan</li>
//           <li>Nguyễn Hải Đăng</li>
//           <li>Nguyễn Tiến Quang</li>
//           <li>Nguyễn Văn Chiến</li>
//         </ol>
//       </div>
//       <button onClick={helloWord}>Hello World</button>
//       <p style={{ border: '1px solid red', padding: '20px 20px', fontSize: '20px' }}>Hello World</p>
//       <p style={styleObject}>Hello World</p>
//       <p className="borderpurple">Hello World</p>
//       <p>Users: {user.showFullName()}</p>
//       <p></p>
//       <ol>
//         <li>First Name: {firstName}</li>
//         <li>Last Name: {lastName}</li>
//         <li>Full Name: {getFullName(firstName, lastName)}</li>
//       </ol>

//       <div>
//         {' '}
//         <ComponentA />
//       </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import Fragment from './components/Fragment';

function App() {
  return (
    <>
      <div>
        <Fragment />
      </div>
    </>
  );
}

export default App;
