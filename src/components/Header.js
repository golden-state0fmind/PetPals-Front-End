import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
// import {Nav, Button, Form, FormControl, Navbar, NavDropdown} from 'react-bootstrap'
// import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar'


const Header = (props) => {
  return (
    <header>



        {/* <Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home"> </Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#profile">  </Nav.Link>
						<Nav.Link href="#Acount-info"> <Link to={'/accountinfo'}>Account info</Link> </Nav.Link>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
					</Nav>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Navbar> */}

      <div className="logo">
        <Link to={'/'}>Pet Pals Home</Link>
        <SearchBar />
        <ul>
          <li><Link to={'/profile'}>Profile</Link></li>
          <li><Link to={'/notifications'}>Notifications</Link></li>
        </ul>
      </div>
      <div className="links">
        <ul>
<img src="" alt=""/>
          {props.currentUser ?
            <>
            <div className="dropdown" >
            <div className="img-wrapper">
              <button className="dropbtn"> <img className="nav-dropdown-img" src="https://moviepaws.files.wordpress.com/2016/10/catlady-simpsons.png" alt=""/> </button>
              </div>
              <div className="dropdown-content">
           
                <li><Link to={'/allpets'}>All Pets</Link></li>
                <li> <Link to={'/accountinfo'}>Account info</Link></li>
             
              <a href="/logout" onClick={props.logout}>Log Out</a> 
             </div>
            </div>
              {/* <li><Link to={'/profile'}>Profile</Link></li>
              <li><Link to={'/allpets'}>All Pets</Link></li>
              <li><Link to={'/accountinfo'}>Account info</Link></li>
              <li><a href="/logout" onClick={props.logout}>Log Out</a></li> */}
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