import React from "react";
import Base from "../../components/base/base.component";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import './authentication.styles.scss';

class Authentication extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <Base className="authentication">
                <SignIn/>
                <SignUp/>
            </Base>
        );
    }

}

export default Authentication;