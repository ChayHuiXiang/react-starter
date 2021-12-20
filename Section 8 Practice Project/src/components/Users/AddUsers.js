import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [inputError, setInputError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    setUsernameInput("");
    setAgeInput("");
    if (usernameInput.trim().length === 0) {
      setInputError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+ageInput.trim() < 1) {
      setInputError({
        title:'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    const userData = {
      name: usernameInput,
      age: ageInput,
      id: Math.random().toString(),
    };
    props.onSubmit(userData);
  };
  const usernameChangeHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };
  const dismissModal = () => {
    setInputError(null);
  }

  return (
    <div>
      {inputError && <ErrorModal title={inputError.title} message={inputError.message} onDismissModal={dismissModal}/>}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={usernameInput}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
