import { useContext } from "react";
import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ion-icon name="book-outline"></ion-icon>
        <NavLink to="/home" activeClassName={styles.active}>
          BooksBud
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.otherchild}>
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={styles.otherchild}>
              <NavLink to="/books" activeClassName={styles.active}>
                Buy
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={styles.otherchild}>
              <NavLink to="/new-book" activeClassName={styles.active}>
                Sell/Donate
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li className={styles.lastchild}>
              <NavLink to="/auth" activeClassName={styles.active}>
                Signup/Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={styles.specialchild}>
              <NavLink
                to="/home"
                activeClassName={styles.active}
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
