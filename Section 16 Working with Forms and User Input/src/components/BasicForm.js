import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    inputValue: firstNameValue,
    inputValid: firstNameValid,
    displayInvalid: firstNameDisplayInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetHandler: firstNameResetHandler,
  } = useInput((inputValue) => inputValue.trim().length !== 0);

  const {
    inputValue: lastNameValue,
    inputValid: lastNameValid,
    displayInvalid: lastNameDisplayInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetHandler: lastNameResetHandler,
  } = useInput((inputValue) => inputValue.trim().length !== 0);

  const {
    inputValue: emailValue,
    inputValid: emailValid,
    displayInvalid: emailDisplayInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput((inputValue) => inputValue.includes("@"));

  const formValid = firstNameValid && lastNameValid && emailValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameDisplayInvalid && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameDisplayInvalid && <p className="error-text">Please enter a valid First Name.</p>}
        </div>
        <div className={`form-control ${lastNameDisplayInvalid && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameDisplayInvalid && <p className="error-text">Please enter a valid Last Name.</p>}
        </div>
      </div>
      <div className={`form-control ${emailDisplayInvalid && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="name" value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailDisplayInvalid && <p className="error-text">Please enter a valid e-mail.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
