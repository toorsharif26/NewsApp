// import PropTypes from 'prop-types'
import React from 'react'
// import React, { Component } from 'react'
import {BrowserRouter,
  Link} from 'react-router-dom';
  

export const NavBar = () => {
    return <>
      <div><nav className="navbar fixed-top navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Notify</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
 <BrowserRouter forceRefresh={true}>
        
          <Link  className="nav-link" forceRefresh={true} to="/general">Home</Link>
          </BrowserRouter>
        
        </li>
        <li className="nav-item">
        <BrowserRouter forceRefresh={true}>
          <Link className="nav-link" forceRefresh={true} to="/business">Business</Link>
          </BrowserRouter>
        </li>
          <li className="nav-item">
          <BrowserRouter forceRefresh={true}>
        
          <Link className="nav-link" forceRefresh={true} to="/entertainment">Entertainment</Link>
          </BrowserRouter>
        
        </li>


 <li className="nav-item">  
        <BrowserRouter forceRefresh={true}>
        <Link  className="nav-link" forceRefresh={true} to="/health">Health</Link>
        </BrowserRouter>
        </li>
 <li className="nav-item">
          <BrowserRouter forceRefresh={true}>
          <Link className="nav-link" forceRefresh={true} to="/science">Science</Link>
          </BrowserRouter>
        </li>
 <li className="nav-item">
          <BrowserRouter forceRefresh={true}>
          <Link className="nav-link" forceRefresh={true} to="/sports">Sports</Link>
          </BrowserRouter>
        </li>
 <li className="nav-item">
          <BrowserRouter forceRefresh={true}>
          <Link className="nav-link"  forceRefresh={true} to="/technology">Technology</Link>
          </BrowserRouter>
        </li>      
       
      </ul>
{/*       
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="News Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit">Search</button>
      </form> */}
      
    </div>
  </div>
</nav></div>
      </>
    
    
  }


export default NavBar