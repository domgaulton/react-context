import React from "react";
import { NavLink } from "react-router-dom";
import { ContextConsumer } from "../context/ContextProvider";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Parent
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/aunt">
              Aunt
            </NavLink>
          </li>
          {this.props.loggedInAs === "Dom" && (
            <li>
              <NavLink activeClassName="active" to="/aunt">
                Secrets!
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const NavUpdate = props => (
  <ContextConsumer>
    {({ loggedInAs }) => <Nav {...props} loggedInAs={loggedInAs} />}
  </ContextConsumer>
);

export default NavUpdate;
