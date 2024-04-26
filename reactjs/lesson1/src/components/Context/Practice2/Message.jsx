import React from 'react';
import PropTypes from 'prop-types';
import ChangeTheme from '../../../context/ChangeTheme';

const Message = (props) => {
  const currentTheme = React.useContext(ChangeTheme);

  const bgColor = currentTheme === 'light' ? 'white' : 'black';
  const textColor = currentTheme === 'light' ? 'black' : 'white';

  return <div style={{ backgroundColor: bgColor, color: textColor }}>{props.children}</div>;
};

Message.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Message;
