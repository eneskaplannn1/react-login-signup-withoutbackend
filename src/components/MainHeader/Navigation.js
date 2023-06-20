import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import { AuthContext } from "../context/auth-context";

const Navigation = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
