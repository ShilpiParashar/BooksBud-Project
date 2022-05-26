import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    // <li className={classes.small}>
    <p className={classes.small}>"{props.text}"</p>
    // </li>
  );
};

export default CommentItem;
