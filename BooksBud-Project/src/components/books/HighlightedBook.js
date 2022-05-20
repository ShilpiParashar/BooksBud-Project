import { Fragment } from "react";
import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  return (
    <Fragment>
      <figure className={classes.book}>
        <p>Book Title and Author's Name: {props.author}</p>
        <figcaption>Review: {props.text}</figcaption>
        <figcaption>Price: {props.price}</figcaption>
        <figcaption>Seller's Name: {props.seller}</figcaption>
        <figcaption>Contact Number: {props.phoneNumber}</figcaption>
        <figcaption>Email Address: {props.email}</figcaption>
        <figcaption>Date of Posting: {props.date}</figcaption>
      </figure>
      <div>{props.image}</div>
    </Fragment>
  );
};

export default HighlightedBook;
