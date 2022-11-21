import React from "react";
import logo from '../../logo.svg';
import { Link,NavLink } from "react-router-dom";
import './header.styles.scss';


const Header = () =>(
            <div className="header">
                <div className="logo">
                  <Link to="/">
                  
                  <img src={logo} width="100px" height="100px" />
                  </Link>
                </div>
                <div className="option">
                    <NavLink activeClassName="active" className={"tab"} to='/'>Home</NavLink >
                </div>
                <div className="option">
                    <NavLink  to='/about'>About</NavLink >
                </div>
                <div className="option">
                    <NavLink  to='#'>Contacts</NavLink >
                </div>
                <div className="option">
                    <NavLink  to='/authentication'>Sign IN</NavLink >
                </div>
                
            </div>
);
            
   
export default Header;