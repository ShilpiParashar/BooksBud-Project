import { useRef, useState } from "react";
import { Fragment } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  // const [file, setFiles] = useState(null);

  // useCustomFetchHook(file);

  //     return(
  //         <div>
  //             <input
  //                 type="file" id="input"
  //                 // onChange={ e => setFiles(e.target.value)}
  //                 onChange={() => setFiles(inputRef.current.files[0])}
  //                 ref={inputRef}
  //             />
  //         </div>
  //     )
  // }
  // const [image, setImage] = useState(null);
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const priceInputRef = useRef();
  const ratingInputRef = useRef();
  const sellerInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const dateInputRef = useRef();
  const imageInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredSeller = sellerInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    // optional: validate here

    props.onAddBook({
      author: enteredAuthor,
      text: enteredText,
      price: enteredPrice,
      rating: enteredRating,
      seller: enteredSeller,
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
      date: enteredDate,
      image: enteredImage,
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
        message={(location) =>
          "Are you sure you want to leave? All your entered data wil be lost!"
        }
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
            <label htmlFor="author">Book Title and Author's Name</label>
            <textarea
              type="text"
              rows="2"
              id="author"
              ref={authorInputRef}
            ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Review</label>
            <input id="text" type="text" ref={textInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" ref={priceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              decimalslimit={1}
              max="5"
              min="0"
              step="0.1"
              ref={ratingInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="seller">Your Name</label>
            <input type="text" id="seller" ref={sellerInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="phoneNumber">Contact Number</label>
            <input
              type="text"
              id="phoneNumber"
              maxlength="10"
              title="Please enter a valid phone number!"
              pattern="[1-9]{1}[0-9]{9}"
              ref={phoneNumberInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              title="Please enter a valid e-mail Address"
              ref={emailInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date of posting</label>
            <input type="date" id="date" ref={dateInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Upload an image</label>
            <input
              type="file"
              accept="image/*"
              id="image"
              ref={imageInputRef}
              // onChange={() => setFiles(imageInputRef.current.files[0])}
            />
          </div>
          <div className="actions">
            <button onClick={finishEnteringHandler} className="btn">
              Add Book
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BookForm;
