import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import React, {useState} from 'react';

function App() {
  const [darkmode, setDarkMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const changeMode = () => {
    if(darkmode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is enabled", "success");
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <Navbar title="TextEditor" alert={showAlert} mode={darkmode} changeMode = {changeMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextBox mode={darkmode}/>
      </div>
   </>
  );
}

export default App;
