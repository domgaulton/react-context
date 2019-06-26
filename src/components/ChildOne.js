import React from "react";
import { ContextConsumer } from "../context/ContextProvider";
import { Link } from "react-router-dom";

class ChildOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userData !== this.props.userData) {
      this.setState({
        userData: this.props.userData
      });
    }
  }

  render() {
    return (
      this.state.userData && (
        <React.Fragment>
          <p>Something is... {this.props.something ? "true" : "false"}</p>
          <p>
            Name:{" "}
            <Link to={`/uncle/${this.state.userData.name.first}`}>
              {this.state.userData.name.first}
            </Link>
          </p>
          <p>Email: {this.state.userData.email}</p>
        </React.Fragment>
      )
    );
  }
}

const ChildOneUpdate = props => (
  <ContextConsumer>
    {({ userData }) => (
      <ChildOne
        // remember to spread the existing props otherwise you lose any new ones e.g. 'something' that don't come from the provider
        {...props}
        userData={userData}
      />
    )}
  </ContextConsumer>
);

export default ChildOneUpdate;
