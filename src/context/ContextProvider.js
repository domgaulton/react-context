import React from "react";

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dom",
      age: 31,
      creds: {
        email: "domgaulton@gmail.com"
      }
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;

// Create an exportable consumer function that can wrapped around components
const Context = React.createContext();
export const ContextConsumer = Context.Consumer;
