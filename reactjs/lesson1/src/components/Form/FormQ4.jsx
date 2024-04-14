import { useState } from 'react';
import Checkbox from './Checkbox';
import InputForm from './InputForm';
import SelectDropdown from './SelectDropdown';

function Form() {
  const options = ['Programming', 'Development', 'Design', 'Testing'];
  const genderOptions = ['None', 'Male', 'Female', 'Others'];

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('none');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [aboutYou, setAboutYou] = useState('');

  const handleClear = () => {
    setFullName('');
    setAge('');
    setGender('none');
    setSelectedOptions([]);
    setAboutYou('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !age || gender === 'none' || selectedOptions.length === 0 || !aboutYou) {
      alert('Please fill out all required fields.');
      return;
    }
    console.log('-----------------------------------');
    console.log('Full Name:', fullName);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Selected Options:', selectedOptions);
    console.log('About You:', aboutYou);
    console.log('-----------------------------------');

    handleClear();
  };

  return (
    <>
      <div className="bg-slate-400 p-16 w-[42rem] space-y-8 rounded-3xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputForm
            title="Full Name"
            placeholder="Type your full name"
            type="text"
            value={fullName}
            onChange={setFullName}
          />
          <InputForm title="Age" placeholder="Type your age" type="number" value={age} onChange={setAge} />

          <SelectDropdown
            options={genderOptions}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />

          <Checkbox
            options={options}
            boxTitle="Skills"
            selectedOptions={selectedOptions}
            onChange={setSelectedOptions}
          />
          <InputForm
            title="About you"
            placeholder="Tell us about yourself"
            type="textarea"
            value={aboutYou}
            onChange={setAboutYou}
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-black p-4 text-white rounded-lg">
              Submit
            </button>
            <button type="button" className="bg-[#b91c1c] p-4 text-white rounded-lg" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
