import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../input/input";
import { AuthContext } from "../context/auth-context";

function emailReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return { value: "", isValid: false };
}
function passWordReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 6,
    };
  }
  return { value: "", isValid: false };
}
const initialState = {
  value: "",
  isValid: null,
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const { loginHandler, isLoggedIn } = useContext(AuthContext);

  const [{ isValid: isValidEmail, emailValue }, dispatchEmail] = useReducer(
    emailReducer,
    initialState
  );
  const [{ isValid: isValidPassword, passwordValue }, dispatchPassword] =
    useReducer(passWordReducer, initialState);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFormIsValid(isValidEmail && isValidPassword);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      loginHandler(emailValue, passwordValue);
    } else if (!isValidEmail) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    !isLoggedIn && (
      <>
        <Card className={classes.login}>
          <form onSubmit={submitHandler}>
            <Input
              type="email"
              id="email"
              isValid={isValidEmail}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              label="E-mail"
              ref={emailInputRef}
            />
            <Input
              type="password"
              id="password"
              isValid={isValidPassword}
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              label="Password"
              ref={passwordInputRef}
            />

            <div className={classes.actions}>
              <Button type="submit" className={classes.btn}>
                Login
              </Button>
            </div>
          </form>
        </Card>
      </>
    )
  );
};

export default Login;

// useEffect(() => {
//   const handler = setTimeout(() => {
//     console.log(15);
//     setFormIsValid(
//       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//     );
//   }, 500);
//   return () => {
//     clearTimeout(handler);
//   };
// }, [enteredEmail, enteredPassword]);
