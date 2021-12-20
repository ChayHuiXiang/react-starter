import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      const enteredNewPassword = newPasswordInputRef.current.value;
      const idToken = authContext.authToken;
      const response = fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${authContext.apiKey}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            idToken,
            password: enteredNewPassword,
            returnSecureToken: false,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Password Error!");
      }
      const responseData = response.json();
      console.log(responseData);
      history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
