import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BooksBud</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/books" activeClassName={styles.active}>
              Buy Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-book" activeClassName={styles.active}>
              Sell Books
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/three-dim" activeClassName={styles.active}>
              Three Dim
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
