import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {

  const [btnText, setbtnText] = useState("Dark mode");
  const [myStyle,setMyStyle] = useState("light");
  const [modeColor, setmodeColor] = useState({
    color : 'black',
  });

  let toggleStyle = () =>{
      if (myStyle === "light"){
      setMyStyle("dark")
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setbtnText("Enable Light mode")
      setmodeColor({
        color: 'white',
      })
    }
    else{
      setMyStyle("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setbtnText("Enable Dark mode")
      setmodeColor({
        color: 'black',
      })
    }
  }
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${myStyle} bg-${myStyle}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">About Us</a>
            </li>
          </ul>

          <div className="form-check form-switch mx-3">
              <input className="form-check-input mx-4 my-3" type="checkbox" onClick={toggleStyle} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label my-2" htmlFor="flexSwitchCheckChecked" style={modeColor}>{btnText}</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
   title: "default value",
}