import React , { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick =()=> {
        console.log('Uppercase was clicked' + text);
        const textUpperCase = text.toUpperCase();
        setText(textUpperCase);
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
  <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
    </div>
  )
}
