import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
export default function Navbar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.myStyle} bg-${props.myStyle}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
            </li>
          </ul>

          <div className="form-check form-switch mx-3">
              <input className="form-check-input mx-4 my-3" type="checkbox" onClick={props.toggleStyle} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label my-2" htmlFor="flexSwitchCheckChecked" style={props.modeColor}>{props.btnText}</label>
          </div>

        </div>
      </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
   title: "default value",
}