import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className="head">
        <Link to='/' className='navbar-logo justify center' onClick={closeMobileMenu}>
          Movie App
          <span className="material-icons mx-2 my-1" style={{fontSize: '1em'}}>
          live_tv
</span>
        </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
            <Link to='/' className='nav-links' onClick={closeMobileMenu} style={{color:"white"}}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
           <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="genre" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
          style={{color:"white"}}>
            Genre
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="action">Action</a></li>
            <li><a class="dropdown-item" href="horror">Horror</a></li>
            <li><a class="dropdown-item" href="biopic">Biopic</a></li>
            <li><a class="dropdown-item" href="sci-fiction">Sci-fiction</a></li>
            <li><a class="dropdown-item" href="adventure">Adventure</a></li>
          </ul>
        </li>
          
            <li class="nav-item dropdown">

          <a class="nav-link dropdown-toggle " href="language" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Language
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="tamil">Tamil</a></li>
            <li><a class="dropdown-item" href="telugu">Telugu</a></li>
            <li><a class="dropdown-item" href="malayalam">Malayalam</a></li>
            <li><a class="dropdown-item" href="english">English</a></li>
            <li><a class="dropdown-item" href="hindi">Hindi</a></li>
          </ul>
        </li>
            
          </li>
          <li className = "nav-item">
            <NavLink className="nav-link" activeClassName = "active" to="/signup" style={{color:"white"}}>Signup</NavLink>
          </li>
          
          <li className = "nav-item">
            <NavLink className="nav-link" activeClassName = "active" to="/login" style={{color:"white"}}>Login</NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
