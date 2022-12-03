import React,{useState} from "react";
import Base from "../base/base.component";
import { db } from "../../firebase/firebase";
import {
    collection,
    addDoc,
    doc,
} from "firebase/firestore";
import './addcrud.styles.scss';
import { auth } from "../../firebase/firebase";

function AddCrud(){
        
         // for get users
         const [users, setUsers]= useState([]);
         const usersCollection = collection(db, "users");
        // for adding users
         const createUser=async(event)=>{
            event.preventDefault();
            await addDoc(usersCollection, {name: 
            me, age:Number(age)});
            alert('User added');
         };
         const [me,name]=useState("");

         const [age,meage]=useState(0);
         const usename=(e)=>{
            name(e.target.value);
         }
         const useage=(e)=>{
            meage(e.target.value);
         }
        
     return(
        <div>
            <div className="addcrud">

            <h3>
              Add Crud
              {me}<br />
              {age}
              
            </h3>
            
            <div className="addcrud-form">
                
            <input 
                    type="text"
                    placeholder="Name..."
                    onChange={usename}
                     />
                    <input 
                    type="number"
                    placeholder="Age..."
                    onChange={useage}
                     />
                    <button className="btn btn-success" onClick={createUser}>Add</button>
            </div>
            </div>
    
        </div>
     );
}
export default AddCrud;