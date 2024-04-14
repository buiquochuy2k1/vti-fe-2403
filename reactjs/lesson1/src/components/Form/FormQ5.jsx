import { useState } from 'react';
import Checkbox from './Checkbox';
import SingleCheckBox from './SingleCheckBox';
import InputForm from './InputForm';
import SelectDropdown from './SelectDropdown';

function FormQ5() {
  const optionsRole = ['Teacher', 'Student'];
  const optionsFavorite = ['Badminton', 'Football', 'Volleyball'];
  const optionsAddress = ['None', 'Ho Chi Minh', 'Ha Noi'];

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [userpassword, setUserPassWord] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userPhoneNum, setUserPhoneNum] = useState('');

  const [selectedRoleOptions, setSelectedRoleOptions] = useState('');
  const [selectedFavoriteOptions, setSelectedFavoriteOptions] = useState([]);

  const [useradress, setUserAddress] = useState('none');

  const [selectedFile, setSelectedFile] = useState(null);

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setUserName('');
    setUserPassWord('');
    setUserPhoneNum('');
    setSelectedRoleOptions('');
    setSelectedFavoriteOptions([]);
    setUserAddress('none');
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Get the selected file and set it in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !username ||
      !userpassword ||
      !useremail ||
      !userPhoneNum ||
      !selectedRoleOptions ||
      useradress === 'none' ||
      selectedFavoriteOptions.length === 0
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('-----------------------------------');
    console.log('First Name: ', firstname);
    console.log('Last Name: ', lastname);
    console.log('Email: ', useremail);
    console.log('Phone Number: ', userPhoneNum);
    console.log('Username: ', username);
    console.log('Password: ', userpassword);
    console.log('Address: ', useradress);
    console.log('Role: ', selectedRoleOptions);
    console.log('Favorite:', selectedFavoriteOptions);
    console.log('Selected File:', selectedFile ? selectedFile.name : 'No file selected');
    console.log('-----------------------------------');

    handleClear();
  };

  return (
    <div className="bg-slate-400 p-16 w-[42rem] space-y-8 rounded-3xl">
      <h1 className="font-semibold text-3xl">Register Account</h1>
      <span>Please fill in this form to register</span>
      <form className="flex flex-col gap-5 transition-all ease-in" onSubmit={handleSubmit}>
        <div className="flex gap-x-5">
          <InputForm
            title="First Name"
            placeholder="Type your first name"
            type="text"
            value={firstname}
            onChange={setFirstName}
          />
          <InputForm
            title="Last Name"
            placeholder="Type your last name"
            type="text"
            value={lastname}
            onChange={setLastName}
          />
        </div>
        <div className="flex gap-x-5">
          <InputForm
            title="Email"
            placeholder="Type your email"
            type="text"
            value={useremail}
            onChange={setUserEmail}
          />
          <InputForm
            title="Phone Number"
            placeholder="Type your phone number"
            type="number"
            value={userPhoneNum}
            onChange={setUserPhoneNum}
          />
        </div>
        <InputForm
          title="Username"
          placeholder="Type your username"
          type="text"
          value={username}
          onChange={setUserName}
        />
        <InputForm
          title="Password"
          placeholder="Type your password"
          type="password"
          value={userpassword}
          onChange={setUserPassWord}
        />

        <SingleCheckBox
          options={optionsRole}
          singleBoxTittle="Role"
          selectedOption={selectedRoleOptions}
          onChange={setSelectedRoleOptions}
        />

        <Checkbox
          options={optionsFavorite}
          boxTitle="Favorite"
          selectedOptions={selectedFavoriteOptions}
          onChange={setSelectedFavoriteOptions}
        />

        <SelectDropdown
          options={optionsAddress}
          value={useradress}
          onChange={(e) => setUserAddress(e.target.value)}
        />

        <div>
          <label htmlFor="Upload File" className="block font-semibold text-l text-red-500">
            Upload File
          </label>
          <input type="file" id="uploadFile" name="filename" onChange={handleFileChange} />
        </div>

        <div className="flex gap-2">
          <button type="submit" className="p-4 text-black rounded-lg bg-green-500 hover:bg-white ">
            Register Now
          </button>
          <button type="button" className="bg-[#b91c1c] p-4 text-white rounded-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormQ5;
