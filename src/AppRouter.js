import React from "react";
import Parent from "./components/Parent";
import Uncle from "./components/Uncle";
import Aunt from "./components/Aunt";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextConsumer } from "./context/ContextProvider";

class AppRouter extends React.Component {
  render() {
    return this.props.loggedIn ? (
      <Router>
        <Nav />
        <Route path="/" exact component={Parent} />
        <Route path="/uncle/:id" component={Uncle} />
        <Route path="/aunt/" component={Aunt} />
      </Router>
    ) : (
      <button onClick={this.props.logUserIn}>Please log in</button>
    );
  }
}

const AppRouterUpdate = props => (
  <ContextConsumer>
    {({ loggedIn, logUserIn }) => (
      <AppRouter {...props} loggedIn={loggedIn} logUserIn={logUserIn} />
    )}
  </ContextConsumer>
);

export default AppRouterUpdate;
