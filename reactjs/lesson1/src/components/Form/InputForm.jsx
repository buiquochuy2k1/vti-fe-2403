import PropTypes from 'prop-types';

const InputForm = ({ title, placeholder, type, value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (type === 'text' || type === 'textarea' || type === 'password') {
      onChange(inputValue);
    } else if (type === 'number') {
      // Only allow numeric input
      const numericValue = inputValue.replace(/\D/g, '');
      onChange(numericValue);
    }
  };

  return (
    <div>
      <label htmlFor={title} className="block text-sm font-semibold">
        {title}
      </label>
      {type === 'text' && (
        <input
          id={title}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={title}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      )}
      {type === 'number' && (
        <input
          id={title}
          type="text"
          pattern="[0-9]*"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      )}
      {type === 'password' && (
        <input
          id={title}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      )}
    </div>
  );
};

InputForm.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'textarea', 'number', 'password']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
