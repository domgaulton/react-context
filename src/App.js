import React from "react";
import Parent from "./components/Parent";
import ContextProvider from "./context/ContextProvider";

class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <Parent />
      </ContextProvider>
    );
  }
}

export default App;
