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
  const toggleMode = (cls) => {
    removeBgClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if (cls === "dark") {
      // setMode("dark");
      document.body.style.color = "white";
      // document.body.style.backgroundColor = "black";
      showAlert(cls+" mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
      // document.title = "TextUtils - DarkMode";
    } else {
    //   setMode("light");
      document.body.style.color = "black";
    //   document.body.style.backgroundColor = "white";
      showAlert(cls+" mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
    //   // document.title = "TextUtils - LightMode";
    }
  };
  const removeBgClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
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
          <TextForm heading="Enter the text to Analyze below" showAlert={showAlert}  mode={mode}/>
        {/* // </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
