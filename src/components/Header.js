import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Pet Pals Home</Link>
        <SearchBar />
      </div>
      <div className="links">
        <ul>

          {props.currentUser ?
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              {/* these links need to built out */}
              <li><Link to={'/allpets'}>All Pets</Link></li>
              <li><Link to={'/accountinfo'}>Account info</Link></li>
              <li><a href="/logout" onClick={props.logout}>Log Out</a></li>
            </>
            :
            <>
              <li><Link to={'/'}>Take a tour</Link></li>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}
export default Header;