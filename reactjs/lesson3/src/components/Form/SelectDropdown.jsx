import PropTypes from 'prop-types';

const SelectDropdown = ({ options, value, onChange }) => {
  return (
    <div>
      <label htmlFor="select" className="block">
        Select
      </label>
      <select id="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectDropdown;
