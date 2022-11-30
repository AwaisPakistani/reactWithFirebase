import React,{useState} from "react";
import './header.styles.scss';
import logo from '../../logo.svg';
import { Link,NavLink } from "react-router-dom";
import {
    onAuthStateChanged,
    signOut,
 } from "firebase/auth";
 import { auth } from "../../firebase/firebase";

function Header() {
    const [user, setUser]=useState({});
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      });
    const logout = async()=>{
        await signOut(auth);
    };
     return (
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
                {
                    user?
                    <div className="option">
                        <NavLink onClick={logout}>
                            Logout
                        </NavLink>
                       
                   </div>
                :
                <div className="option">
                    <NavLink  to='/authentication'>Sign IN</NavLink >
                </div>
                }
                
                
                <div className="option">
                    {
                       user?.email 
                    }
                </div>
                <div className="option">
                    
                  <img src={localStorage.getItem('profilePic')} 
                            width="30px" height="30px"/> 

                </div>
               
               
            </div>
     );
}
            
            
   
export default Header;