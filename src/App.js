import React from "react";
import AppRouter from "./AppRouter";
import ContextProvider from "./context/ContextProvider";

class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    );
  }
}

export default App;
