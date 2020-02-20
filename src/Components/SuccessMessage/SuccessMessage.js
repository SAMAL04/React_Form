import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = ({
  message = "Request Submitted Sucessfully!"
}) => {
  return <p>{message}</p>
};

SuccessMessage.propTypes = {
  message: PropTypes.string
};

export default SuccessMessage;