import React,{useState} from "react";
import Base from "../base/base.component";
import { db } from "../../firebase/firebase";
import {
    collection,
    addDoc,
    doc,
} from "firebase/firestore";
import './editcrud.styles.scss';
import { auth } from "../../firebase/firebase";

function EditCrud(props){
        
        
        
     return(
        <div>
            <div className="editcrud">

            <h3>
              Update User
              {window.location.pathname}
             
              
            </h3>
            
            <div className="addcrud-form">
                
            <input 
                    type="text"
                    placeholder="Name..."
                    
                     />
                    <input 
                    type="number"
                    placeholder="Age..."
                    
                     />
                    <button className="btn btn-success">Add</button>
            </div>
            </div>
    
        </div>
     );
}
export default EditCrud;