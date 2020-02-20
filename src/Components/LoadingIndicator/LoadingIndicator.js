import React, {useEffect} from "react";
import PropTypes from "prop-types";

const LoadingIndicator = ({ message = "Sending Request..." }) => {

  useEffect(() => {
    // Did mount & Did update
    debugger;
    return () => {
      // Will unmount
      debugger;
    }
  })

  return <strong>{message}</strong>;
};

LoadingIndicator.propTypes = {
  message: PropTypes.string
};

export default LoadingIndicator;
