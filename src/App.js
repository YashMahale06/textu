
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import Alert from './components/Alert';






function App() {
  const [mode, setmode] = useState('light');
  const [alert,setalert]=useState("null");
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("dark mode has been enebled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enebled","success")

    }
  }
  return (
    <>
    <Navbar title="text u" abouttext="About Us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
   
    <div className="container my-3" >
    <TextForm heading="Enter the txt " mode={mode}/>
    </div>
    </>
  );
}

export default App;
