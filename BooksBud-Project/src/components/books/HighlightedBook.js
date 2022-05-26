import { Fragment } from "react";
import classes from "./HighlightedBook.module.css";
import bookImage from "../../assests/front.jpeg";

const HighlightedBook = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <li className={classes.item}>
          <section className={classes["hero-section"]}>
            <div className={classes.textbox}>
              <p className="centered">{props.author} </p>
              <figcaption>"{props.text}"</figcaption>
              <div>
                <ul>
                  <li>
                    <ion-icon name="pricetags-outline"></ion-icon>
                    <span>
                      &#8377;<strong>{props.price}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="star-outline"></ion-icon>
                    <span>
                      <strong>{props.rating}</strong> rating
                    </span>
                  </li>
                  <li>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>
                      Posted on
                      <strong> {props.date}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="person-outline"></ion-icon>
                    <span>
                      Seller's name is
                      <strong> {props.seller}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="call-outline"></ion-icon>
                    <span>
                      Contact no. is
                      <strong> {props.phoneNumber}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>
                      Email Address is
                      <strong> {props.email}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes["img-box"]}>
              <img src={bookImage} className={classes.img} alt="book pic" />
              {/* {props.image} */}
            </div>
          </section>
        </li>
      </div>
      {/* <figure className={classes.book}>
        <p>Book Title and Author's Name: {props.author}</p>
        <figcaption>Review: {props.text}</figcaption>
        <figcaption>Price: {props.price}</figcaption>
        <figcaption>Rating: {props.rating}</figcaption>
        <figcaption>Seller's Name: {props.seller}</figcaption>
        <figcaption>Contact Number: {props.phoneNumber}</figcaption>
        <figcaption>Email Address: {props.email}</figcaption>
        <figcaption>Date of Posting: {props.date}</figcaption>
      </figure>
      <div>{props.image}</div> */}
    </Fragment>
  );
};

export default HighlightedBook;
