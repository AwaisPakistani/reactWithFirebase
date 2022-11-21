import React from "react";
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import './footer.styles.scss';
class Footer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="footer">
                <div className="logo">
                    <Link to="/">
                    
                   <img src={logo} width="100px" height="100px" />
                    </Link>
                </div>
                <div className="footer-menus">
                   <div className="footer1">
                     <h3>
                        Pages
                     </h3>
                       <Link to="/"> 
                         Home
                       </Link>
                       <Link to="/about"> 
                         About Us
                       </Link>
                       <Link to="#"> 
                         Contact Us
                       </Link>
                       <Link to="/authentication"> 
                         Register
                       </Link>
                   </div>
                   <div className="footer2">
                            <h3>
                                Promotions
                            </h3>
                            <Link to="/"> 
                         Home
                       </Link>
                       <Link to="/about"> 
                         About Us
                       </Link>
                       <Link to="#"> 
                         Contact Us
                       </Link>
                       <Link to="/authentication"> 
                         Register
                       </Link>
                   </div>
                 
                </div>
            </div>
        );
    }
}
export default Footer;