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
        <p>{this.props.something}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

// export default ChildOne;

const ChildOneUpdate = props => (
  <ContextConsumer>{({ name }) => <ChildOne name={name} />}</ContextConsumer>
);

export default ChildOneUpdate;
