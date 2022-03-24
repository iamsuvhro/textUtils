//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [btnText, setbtnText] = useState("Dark mode");
  const [modeColor, setmodeColor] = useState({
    color : 'black',
  }); 

  const [myStyle,setMyStyle] = useState("light");
  let toggleStyle = () =>{
      if (myStyle === "light"){
      setMyStyle("dark")
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setbtnText("Enable Light mode")
      setmodeColor({
        color: 'white',
      })
      showAlert('Dark mode hasbeen enabled','success');
    }
    else{
      setMyStyle("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black ';
      setbtnText("Enable Dark mode")
      setmodeColor({
        color: 'black',
      })
      showAlert('Light mode hasbeen enabled','success');
    }
  }
    // Creating alert message
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
      setAlert({
        message: message,
        type: type,
      })
      setTimeout(() =>{
        setAlert(null);
      },1500)
    }
  return (
    <>
    <Router>

    <Navbar title="Text Editor" myStyle={myStyle} modeColor={modeColor} btnText={btnText} toggleStyle={toggleStyle}/>
    <Alert alert={alert}/>
    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/">
        <TextForm heading="Text Editing Tools" showAlert={showAlert}/>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
