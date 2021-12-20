import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameValidation = (inputValue) => {
    return inputValue.trim().length !== 0;
  };

  const {
    inputValue: nameInputValue,
    displayInvalid: nameDisplayInvalid,
    inputValid: nameInputValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput(nameValidation);

  const emailValidation = (inputValue) => {
    return inputValue.includes("@");
  };

  const {
    inputValue: emailInputValue,
    displayInvalid: emailDisplayInvalid,
    inputValid: emailInputValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput(emailValidation);

  const formIsValid = nameInputValid && emailInputValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputValue);
    console.log(emailInputValue);
    emailResetHandler();
    nameResetHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameDisplayInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={nameInputValue}
          onBlur={nameBlurHandler}
        />
        {nameDisplayInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={`form-control ${emailDisplayInvalid && "invalid"}`}>
        <label htmlFor="e-mail">Your Email</label>
        <input
          type="email"
          id="e-mail"
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailDisplayInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
