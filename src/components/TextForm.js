import { getByTestId, getElementError } from "@testing-library/dom";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppClick = () => {
    console.log("upper case was clicked"+text);
    let newText=text.toUpperCase();
    SetText(newText);

  };
  const handleloClick = () => {
    console.log("upper case was clicked"+text);
    let newText=text.toLowerCase();
    SetText(newText);
  };
  const handleClear = () => {
    console.log("upper case was clicked"+text);
    let newText='';
    SetText(newText);
  };
  const handlecopy=()=>{
    var text= getByTestId("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange = (event) => {
      SetText(event.target.value)

    console.log("on change is fired");
  };
  const [text, SetText] = useState("");
//   const test=""
  return (
      <>
    <div style={{Color:props.mode==='light'?'black':'light'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='light'?'grey':'light'}}
          id="mybox"
          rows="10"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleUppClick}
      >
        Convert to Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleloClick}
      >
          Convert to Lowercase
      </button>
      <button
        type="button"
        id="clear"
        className="btn btn-primary"
        onClick={handleClear}
      >
          Clear
      </button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
