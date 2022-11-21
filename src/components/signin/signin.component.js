import React from "react";
import { Button } from "bootstrap";

class SignIn extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(

            <div className="Signin">
                <h2>
                    I already have an account
                </h2>
                <span>Sign In</span>
                <form>
                   <div>

                    <label> Email</label>
                   </div>
                    <div>

                    <label> Password</label>
                    </div>
                    
                    
                    

                </form>
            </div>
        )
    }
}
export default SignIn;