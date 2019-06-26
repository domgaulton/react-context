import React from "react";

class Uncle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Uncle...{this.props.match.params.id}</h1>
      </React.Fragment>
    );
  }
}

export default Uncle;
