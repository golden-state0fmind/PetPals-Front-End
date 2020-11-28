import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Nav, Button, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap'
// import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar'


const Header = (props) => {
  return (
    <header className="navbar">
        <ul>
          <li><Link to={'/'}>🏠</Link> </li>
          <li><SearchBar /></li>
        </ul>

        <ul>
          <div className="dropdown" >
            <div className="menu-button">
              <div className="dropbtn"><img className=" dropdown-img" src="https://res.cloudinary.com/petpals/image/upload/v1606381699/oo53bublc5vmutnhsprr.png" alt="Temporary Profile Pic" /> </div>
            </div>
            <div className="dropdown-content">
                  <li><span className="petpals">PetPals</span></li>
              {props.currentUser ?
                <>
                  <li className="menu-li"><Link to={'/profile'}>Profile</Link></li>
                  <li className="menu-li"><Link to={'/notifications'}>Notifications</Link></li>
                  <li className="menu-li"><Link to={'/allpets'}>My Pets</Link></li>
                  <li className="menu-li"><Link to={'/allphotos'}>Photos</Link></li>
                  <li className="menu-li"><Link to={'/accountinfo'}>Account</Link></li>
                  <li className="menu-li"><a href="/logout" onClick={props.logout}>Log Out</a></li>
                </>
                :
                <>
                  <li className="menu-li"><Link to={'/'}>Take a tour</Link></li>
                  <li className="menu-li"><Link to={'/register'}>Register</Link></li>
                  <li className="menu-li"><Link to={'/login'}>Login</Link></li>
                </>
              }
            </div>
          </div>
        </ul>
    </header>
  );
}
export default Header;