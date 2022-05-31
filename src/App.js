import React, { useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#103531';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <div>
    <Router>
      <Navbar title="TextyAF" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element = {<About mode={mode}/>} />
            <Route exact path="/TextyAF-text_utility-React.js" element = { <Textform heading="Enter the text below" showAlert={showAlert} mode= {mode}/>} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
