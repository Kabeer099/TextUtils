import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About us"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
            
          <Route exact path="/" element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode}/>} /> */}
          <TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode}/>
        {/* // </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
