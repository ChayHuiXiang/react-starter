import classes from './Input.module.css';
import React, {useRef, useImperativeHandle} from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, ()=>({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <div className={`${classes.control} ${
        props.inputState.isValid === false ? classes.invalid : ""
      }`}>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.inputState.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
});

export default Input;
