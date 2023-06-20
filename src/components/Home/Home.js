import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { AuthContext } from "../context/auth-context";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn && (
      <>
        <Card className={classes.home}>
          <h1>Welcome back!</h1>
        </Card>
      </>
    )
  );
};

export default Home;
