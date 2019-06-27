import React from "react";
import { ContextConsumer } from "../context/ContextProvider";
import { Link } from "react-router-dom";

class ChildOne extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Something is... {`${this.props.something}`}</p>
        <p>
          Name:{" "}
          <Link to={`/uncle/${this.props.userData.name.first}`}>
            {this.props.userData.name.first}
          </Link>
        </p>
        <p>Email: {this.props.userData.email}</p>
      </React.Fragment>
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
