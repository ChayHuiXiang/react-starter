import {useState} from 'react';

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState("");
    const [inputTouched, setInputTouched] = useState(false);

    const inputValid = validateValue(inputValue);
    const displayInvalid = !inputValid && inputTouched;

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setInputTouched(true);
    }

    const resetHandler = () => {
        setInputValue("");
        setInputTouched(false);
    }

    return {
        inputValue,
        inputValid,
        displayInvalid,
        inputChangeHandler,
        inputBlurHandler,
        resetHandler,
    }
}

export default useInput;