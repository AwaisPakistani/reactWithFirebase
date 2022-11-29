import React from "react";
import './authentication.styles.scss';
import Base from "../../components/base/base.component";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";


class Authentication extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <Base>
               <div className="authentication">
                    <SignIn/>
                    <SignUp/>
               </div>
            </Base>
        );
    }

}

export default Authentication;