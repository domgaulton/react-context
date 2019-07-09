import React from "react";
import Input from "./formComponents/Input";
import FormWrapper from "./formComponents/FormWrapper";
import FieldsMatch from "./formComponents/FieldsMatch";

class Aunt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValues: {}
    };
  }

  handleReturnFormData = data => {
    this.setState({
      fieldValues: {
        ...this.state.fieldValues,
        [data.name]: data.value
      }
    });
  };

  handleReturnMatchingField = (type, value) => {
    this.setState({
      fieldValues: {
        ...this.state.fieldValues,
        [type]: value
      }
    });
  };

  additionalValidation = input => {
    this.setState.additionalValidation(input);
  };

  render() {
    return (
      <React.Fragment>
        <FormWrapper
          returnFormData={this.handleReturnFormData}
          additionalValidation={false}
        >
          <Input
            id="input"
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Enter text"
            pattern=".{3,}"
            required={true}
          />
          <Input
            id="input"
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Enter text"
            pattern=".{3,}"
            required={true}
          />
          <FieldsMatch
            type="password"
            name="password"
            label="Password"
            placeholder="Please enter a new password"
            pattern=".{3,}"
            returnMatchingField={this.handleReturnMatchingField}
            matching={this.additionalValidation}
          />
        </FormWrapper>
      </React.Fragment>
    );
  }
}

export default Aunt;
