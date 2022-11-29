import React from "react";
import './signup.styles.scss';

class SignUp extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
        <div className="sign-up">
            <h3>
                I don't have an account
            </h3>
            <form className="sign-up-form">
                <input type="text" placeholder="Full Name..." />
                <input type="type" placeholder="Email..." />
                <input type="password" placeholder="Password..." />

                <button className="btn btn-primary">REgister</button>
            </form>
        </div>
        );
    }
}
export default SignUp;