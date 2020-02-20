import React, { Component } from "react";
import PropTypes from "prop-types";

class InputField extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  // UNSAFE_componentWillUpdate() {
  //   debugger;
  // }

  // componentDidUpdate() {
  //   debugger;
  // }

  // componentWillUnmount() {
  //   debugger;
  // }

  /**
   * Handle with care...
   */
  // shouldComponentUpdate(nextProps) {
  //   if(nextProps.value !== this.props.value) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const {
      value,
      label,
      type,
      onChangeHandler,
      name
    } = this.props;
    return (
      <label>
        {label}:
        <input 
          onChange={onChangeHandler} 
          type={type} 
          name={name} 
          value={value}
        />
      </label>
    );
  }
}

export default InputField;
