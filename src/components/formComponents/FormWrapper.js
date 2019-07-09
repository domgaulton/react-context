import React from "react";
import inputValueToState from "../../helpers/inputValueToState";
import checkFormValidity from "../../helpers/checkFormValidity";

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitBtnActive: false,
      formValues: {},
      additionalValidation: true
    };

    this.form = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.additionalValidation !== prevProps.additionalValidation) {
      this.setState({ additionalValidation: this.props.additionalValidation });
    }
  }

  handleFormChange(event) {
    console.log(this.props.additionalValidation);
    const name = inputValueToState(event).name;
    const value = inputValueToState(event).value;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
    this.setState({ submitBtnActive: checkFormValidity(this.form) });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.returnFormData(this.state.formValues);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Form</h1>
        <form
          ref={this.form}
          onSubmit={event => this.handleSubmit(event)}
          onChange={event => this.handleFormChange(event)}
        >
          {this.props.children}

          <input
            className="submit"
            type="submit"
            disabled={!this.state.submitBtnActive}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default FormWrapper;
