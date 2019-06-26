import React from "react";
import Parent from "./components/Parent";
import Uncle from "./components/Uncle";
import Aunt from "./components/Aunt";
import ContextProvider from "./context/ContextProvider";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Nav />
          <Route path="/" exact component={Parent} />
          <Route path="/uncle/:id" component={Uncle} />
          <Route path="/aunt/" component={Aunt} />
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
