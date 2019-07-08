import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      legacyValid: false,
      dirty: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.valid !== prevProps.valid) {
      this.setValidFromProps();
    }
  }

  handleInputChange(event) {
    this.setState({ valid: event.target.validity.valid });
  }

  setValidFromProps() {
    if (this.props.valid) {
      this.setState({
        legacyValid: true
      });
    }
    this.setState({
      valid: this.props.valid
    });
  }

  wrapperClass(id) {
    if (this.state.legacyValid === true) {
      if (this.state.valid === true) {
        return `valid`;
      } else {
        return `invalid`;
      }
    }
    return "";
  }

  render() {
    const inputWrapperClass = "input-field";

    return (
      <div
        className={`${inputWrapperClass} ${
          this.state.valid ? "valid" : "invalid"
        }`}
      >
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
          pattern={this.props.pattern}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default Input;
