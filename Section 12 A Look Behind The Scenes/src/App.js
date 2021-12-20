import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(true);
  const clickHandler = () => {
    if (allowToggle){
      setShowParagraph((prevState) => !prevState);
    };
  };
  const toggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleHandler}>Allow Toggling</Button>
      <Button onClick={clickHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
