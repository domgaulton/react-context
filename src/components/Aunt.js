import React from "react";
import Input from "./formComponents/Input";
import FormWrapper from "./formComponents/FormWrapper";

class Aunt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  returnFormData(data) {
    console.log(data);
  }

  render() {
    return (
      <React.Fragment>
        <FormWrapper returnFormData={this.returnFormData}>
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
        </FormWrapper>
      </React.Fragment>
    );
  }
}

export default Aunt;
