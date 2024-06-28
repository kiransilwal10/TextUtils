import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // Convert the text to uppercase and update the state
    let newText = text.toUpperCase();
    setText(newText);
    console.log("Uppercase was clicked");
  };

  const handleOnChange = (event) => {
    // Update the state with the current value of the textarea
    setText(event.target.value);
    console.log("onChange was clicked");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    
  };
  return (
    <>
    <div className="container">
      
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"> </textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h1> Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>

    </>
  );
}
