import React from "react";
import ChildOne from "./ChildOne";

class Parent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ChildOne something={true} />
        <ChildOne something={!true} />
      </React.Fragment>
    );
  }
}

export default Parent;
