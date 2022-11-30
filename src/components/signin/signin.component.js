import React,{useState} from "react";
import { signInWithGoogle } from "../../firebase/firebase";
import './signin.styles.scss';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
 } from "firebase/auth";
 import { auth } from "../../firebase/firebase";
function SignIn(){
    const [loginEmail, setLoginEmail]=useState("");
    const [loginPassword, setLoginPassword]=useState(""); 
    
    

   
   
    const login=async()=>{
       try{
         const user= await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword,
         );
         console.log(user);
       }catch(error){
          console.log(error.message);
       }
    };

    
        return(

            <div className="Sign-in">
                <h3>
                    I already have an account
                    
                </h3>
                <span className="sign">Sign In</span>
                <div className="sign-in-form">
                    
                <input type="email" placeholder="Email..."
                onChange={(event)=>{
                    setLoginEmail(event.target.value);
                }}
                />
                <input type="password" placeholder="Password..."
                onChange={(event)=>{
                    setLoginPassword(event.target.value);
                }}
                />
               <div>

                <button onClick={login} className="btn btn-primary">Login with Email</button>
                <button onClick={signInWithGoogle} className="btn btn-primary">Login with Google</button>
               </div>
                </div>
            </div>
        )
    }

export default SignIn;