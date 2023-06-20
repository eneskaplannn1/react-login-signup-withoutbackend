import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext, AuthProvider } from "./components/context/auth-context";

function App() {
  return (
    <AuthProvider>
      <MainHeader />
      <main>
        {<Login />}
        {<Home />}
      </main>
    </AuthProvider>
  );
}

export default App;
