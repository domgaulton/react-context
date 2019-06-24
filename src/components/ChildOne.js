import React from "react";
import { ContextConsumer } from "../context/ContextProvider";

class ChildOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(ContextConsumer);
    return (
      <div>
        <p>Something is... {this.props.something ? "true" : "false"}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

// export default ChildOne;

const ChildOneUpdate = props => (
  <ContextConsumer>
    {({ name }) => <ChildOne {...props} name={name} />}
  </ContextConsumer>
);

export default ChildOneUpdate;
