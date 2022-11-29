import React from "react";
import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(

            <div className="Sign-in">
                <h3>
                    I already have an account
                </h3>
                <span className="sign">Sign In</span>
                <form className="sign-in-form">
                    
                    <input type="type" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />

                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
export default SignIn;