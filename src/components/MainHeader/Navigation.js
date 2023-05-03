import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../context/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
