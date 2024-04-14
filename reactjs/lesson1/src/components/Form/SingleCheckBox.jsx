import PropTypes from 'prop-types';

const SingleSelectCheckbox = ({ options, singleBoxTittle, selectedOption, onChange }) => {
  const handleCheckboxChange = (option) => {
    onChange(option);
  };

  return (
    <div>
      <h2>{singleBoxTittle}</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedOption === option}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

SingleSelectCheckbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  singleBoxTittle: PropTypes.string.isRequired,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SingleSelectCheckbox;
