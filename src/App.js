
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import React from 'react'
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#e0e0e0';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
  <>
    
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} aboutText= "About" /> 
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  {/* <About/> */}
  </>
  );
}

export default App;
