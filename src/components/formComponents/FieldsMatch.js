import React, { Component } from "react";
import Input from "./Input";

class FieldsMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      fieldsMatch: false
    };

    this.form = React.createRef();
    this.newField = React.createRef();
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    if (this.newField.current.state.valid) {
      if (this.form.current[0].value !== this.form.current[1].value) {
        this.setState({ fieldsMatch: false });
        this.props.matching(false);
        return false;
      } else {
        this.setState({
          newField: this.form.current[0].value,
          fieldsMatch: true
        });
        this.props.returnMatchingField(
          this.props.type,
          this.state.fields.newField
        );
        this.props.matching(true);
        return true;
      }
    } else {
      this.setState({ fieldsMatch: false });
      this.props.matching(false);
      return false;
    }
  }

  render() {
    return (
      <form ref={this.form} onChange={this.handleFormChange}>
        <Input
          ref={this.newField}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          label={this.props.label}
          placeholder={this.props.placeholder}
          pattern={this.props.pattern}
          required={true}
        />
        <Input
          type={this.props.type}
          name={`${this.props.name}Confirmation`}
          label={`${this.props.label} confirmation`}
          valid={this.state.fieldsMatch}
        />
      </form>
    );
  }
}

export default FieldsMatch;
