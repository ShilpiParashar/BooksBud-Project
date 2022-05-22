import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import girlImage from "../assests/stairss.jpg";

const HomePage = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles["hero-section"]}>
          <div className={styles.textbox}>
            <h1>Second Hand E-Bookshop</h1>
            <h2>
              For<span> Students|Novel Readers|Book Readers</span>
            </h2>
            <p>Where you can Buy, Sell or Donate Second hand books.</p>
            <div className={styles.logo}>
              <Link to="/login" className={styles.active}>
                Get started
              </Link>
              <Link to="/about" className={styles.active}>
                Learn more
              </Link>
            </div>
            {/* <NavLink activeclassName={styles.btn btn--full margin-right-sm}>Start Reading well</NavLink>
            <NavLink activeclassName={styles.btn btn--outline}>Learn more &darr;</NavLink>  
            */}
          </div>
          <div className={styles["hero-img-box"]}>
            <img
              src={girlImage}
              className={styles["hero-img"]}
              alt="Boy sitting on books"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default HomePage;
