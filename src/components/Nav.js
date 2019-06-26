import React from "react";
import { NavLink } from "react-router-dom";

class Aunt extends React.Component {
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
            <NavLink activeClassName="active" to="/uncle">
              Uncle
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/aunt">
              Aunt
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Aunt;
