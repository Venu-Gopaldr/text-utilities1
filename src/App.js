import Alert from './pages/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  };

  const toggleMode=()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been disabled","primary")
    }else{
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled","success")
    }
  };
  return (
    <>
      <Navbar cor="My-App" title="Home-Here" about="About-Us" link="Contact-Us" toggleMode = {toggleMode} mode = {mode} />
       <Alert alert={alert}/> 
       <div className="container"><Textform showAlert={showAlert} mode = {mode} txt="Enter the text to Analze"/></div>
    </>
  );
}

export default App;
