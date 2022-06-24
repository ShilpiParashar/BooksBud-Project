import AuthForm from "../components/books/AuthForm";
import styles from "./HomePage.module.css";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;

