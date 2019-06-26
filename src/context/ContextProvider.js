import React from "react";
import axios from "axios";

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/")
      .then(response => {
        const data = response.data.results[0];
        console.log(data);
        this.setState({
          userData: data
        });
      })
      .catch(response => {
        console.log(response);
      });
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
