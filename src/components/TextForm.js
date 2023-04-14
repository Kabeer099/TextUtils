import React , { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick =()=> {
        // console.log('Uppercase was clicked' + text);
        const textUpperCase = text.toUpperCase();
        setText(textUpperCase);
        props.showAlert('Your Text Has Been Capitalize', 'success :');
        setTimeout(() => {
          props.showAlert(null);
        }, 1500);

    }
    const handleLowClick =()=> {
      const textLowercase = text.toLowerCase();
      setText(textLowercase);
      props.showAlert('Text Has Been Converted to LowerCase', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
    }
    const handleClearClick =()=>{
      const clearText = '';
        setText(clearText);
        props.showAlert('Text Has Been Cleared', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
    }
    const handleClipBoardClick =()=>{
      navigator.clipboard.writeText(text);
      props.showAlert('Text Has Been Copied to Clipboard ', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
    }
    const handleSpeakClick =()=> {
      let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    
    }
    const handleReverseTextClick =()=> {
      const reverseText = text.split("").reverse();
      // reverseText = reverseText.reverse();
      let newText = reverseText.join("");
      setText(newText);
      props.showAlert('Text Has Been Reversed ', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
    }
    const handleTiltTextClick =()=> {
     let tiltText = text.toUpperCase() + text.substring(1).toLowerCase();
     setText(tiltText);
     props.showAlert('Text Has Been Tilted ', 'success :');
     setTimeout(() => {
       props.showAlert(null);
     }, 1500);
    }
    const handleExtraSpace =()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert('Extra Spaces Removed', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
    }
    const handleOnAlternatingCase =()=> {
      let newtext = ""
      for (let index = 0; index < text.length; index++) {
          if ((index % 2) === 0) {
              newtext += text[index].toLowerCase()
          }
          else {
              newtext += text[index].toUpperCase()
          }

      }
      setText(newtext);
      props.showAlert('Text Has Been Alternated', 'success :');
      setTimeout(() => {
        props.showAlert(null);
      }, 1500);
  }

    const handleOnChange =(event)=> {
        // console.log('On Change');
        setText(event.target.value);
    }

  return (
    <div>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor :props.mode === 'dark' ? 'lightgrey' : 'white',color:''}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleLowClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleSpeakClick}>Speech</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleClipBoardClick}>Copy Text to Click board</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleReverseTextClick}>Reverse Text</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleTiltTextClick}>Tilt Text</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className={`btn bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode} my-2 mx-1`} onClick={handleOnAlternatingCase}>Alter Case</button>
</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length } Minutes to reads </p>
    <h3>Preview</h3>
    <p>{text.len ?'Nothing to Preview!' : text}</p>
</div>
    </div>
  )
}
