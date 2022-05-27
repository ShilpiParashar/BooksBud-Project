import { useRef, useState } from "react";
import { Fragment } from "react";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";
import { Prompt } from "react-router-dom";

const LoginForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: validate here

    props.onLogin({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => "Are you sure you want to leave?"}
      ></Prompt>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              title="Please enter a valid Email Address"
              ref={emailInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Enter Password </label>
            <input
              type="password"
              id="password"
              title="Please enter a valid password"
              ref={passwordInputRef}
            />
          </div>

          <div className="actions">
            <button onClick={finishEnteringHandler} className="btn">
              Login
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default LoginForm;
