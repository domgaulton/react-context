import React from "react";

const Context = React.createContext();
// Create an exportable consumer that can wrapped around components
export const ContextConsumer = Context.Consumer;

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
