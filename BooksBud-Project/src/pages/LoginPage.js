import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./HomePage.module.css";

import LoginForm from "../components/books/LoginForm";
import useHttp from "../hooks/use-http";
import { addLogin } from "../lib/api";

const LoginPage = () => {
  const { sendRequest, status } = useHttp(addLogin);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/home");
    }
  }, [status, history]);

  const addLoginHandler = (loginData) => {
    sendRequest(loginData);
  };

  return (
    <div className={styles.container}>
      <LoginForm isLoading={status === "pending"} onLogin={addLoginHandler} />
    </div>
  );
};
export default LoginPage;
