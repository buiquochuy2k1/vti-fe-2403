import PropTypes from 'prop-types';

const Checkbox = ({ options, boxTitle, selectedOptions, onChange }) => {
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(updatedOptions);
  };

  return (
    <div>
      <h2>{boxTitle}</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

Checkbox.propTypes = {
  boxTitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
