import React , { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick =()=> {
        console.log('Uppercase was clicked' + text);
        const textUpperCase = text.toUpperCase();
        setText(textUpperCase);
    }
    const handlelowClick =()=> {
      const textLowercase = text.toLowerCase();
      setText(textLowercase);
    }
    const handleOnChange =(event)=> {
        console.log('On Change');
        setText(event.target.value);
    }

  return (
    <div>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length } Minutes to reads </p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
    </div>
  )
}
