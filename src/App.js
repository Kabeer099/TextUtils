import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
      document.body.style.color = "white";
      showAlert(cls+" mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
    } else {
      document.body.style.color = "black";
      showAlert(cls+" mode has been selected", "success :");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
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
      <Navbar
        title="TextUtils"
        aboutText="About us"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        <TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode}/>

      </div>
    </>
  );
}

export default App;
