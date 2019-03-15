import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import camera from './camera.svg';

import './NavBar.css';

const NavBar = props =>(
    
      <div className="NavBar">
        <div className="logo">
        <img src={camera} width="140vh" alt="logo" />
        </div>
        <div className="container-navbar">
       <div className="link">
          <Link to="/home" className="link">Peliculas</Link>
        </div>
        <div className="link">
          <Link to="/search" className="link">Series</Link>
        </div>
         <div className="link">
          <Link to="/home" className="link">Conócenos</Link>
         </div>
        </div>
      </div>
    );
  
export default NavBar;