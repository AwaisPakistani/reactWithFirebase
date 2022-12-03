import React, { useState } from "react";
import './signup.styles.scss';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
 } from "firebase/auth";
 import { auth } from "../../firebase/firebase";


function SignUp(){
       
    const [registerEmail, setRegisterEmail]=useState("");
    const [registerPassword, setRegisterPassword]=useState(""); 
   
    

   
   
    const register=async()=>{
       try{
         const user= await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
         );
         console.log(user);
       }catch(error){
          console.log(error.message);
       }
    };
        return(
        <div className="sign-up">
            <h3>
                I don't have an account
                
            </h3>
            
            <div className="sign-up-form">
                
                <input type="email" placeholder="Email..."
                onChange={(event)=>{
                    setRegisterEmail(event.target.value);
                }}
                />
                <input type="password" placeholder="Password..."
                onChange={(event)=>{
                    setRegisterPassword(event.target.value);
                }}
                />

                <button onClick={register} className="btn btn-primary">Register</button>
            </div>
        </div>
        );
    
}
export default SignUp;