import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.author}</p>
        </blockquote>
        <figcaption>{props.text}</figcaption>
        <blockquote>
          <p>{props.price}</p>
        </blockquote>
        <figcaption>{props.date}</figcaption>
      </figure>
      <Link className="btn" to={`/books/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default BookItem;
