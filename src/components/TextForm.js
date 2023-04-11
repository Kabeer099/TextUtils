import React , { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick =()=> {
        // console.log('Uppercase was clicked' + text);
        const textUpperCase = text.toUpperCase();
        setText(textUpperCase);
    }
    const handleLowClick =()=> {
      const textLowercase = text.toLowerCase();
      setText(textLowercase);
    }
    const handleClearClick =()=>{
      const clearText = '';
        setText(clearText);
    }
    const handleClipBoardClick =()=>{
      navigator.clipboard.writeText(text);
    }
    const handleSpeakClick = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleReverseTextClick =()=> {
      const reverseText = text.split("").reverse();
      // reverseText = reverseText.reverse();
      let newText = reverseText.join("");
      setText(newText);
    }
    const handleTiltTextClick =()=> {
     let tiltText = text.toUpperCase() + text.substring(1).toLowerCase();
     setText(tiltText);
    }

    const handleOnChange =(event)=> {
        // console.log('On Change');
        setText(event.target.value);
    }

  return (
    <div>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className="btn btn-success my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleSpeakClick}>Speech</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleClipBoardClick}>Copy Text to Click board</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleReverseTextClick}>Reverse Text</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleTiltTextClick}>Tilt Text</button>
</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text === '' ? '0' :text.split(' ').length} words and {text.length} characters</p>
    <p>{text === '' ? '0' :0.008 * text.split(' ').length } Minutes to reads </p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
    </div>
  )
}
