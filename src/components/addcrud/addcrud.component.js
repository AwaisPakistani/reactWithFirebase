import React,{useState} from "react";
import Base from "../base/base.component";
import { db } from "../../firebase/firebase";
import {
    collection,
    addDoc,
    doc,
} from "firebase/firestore";
import './addcrud.styles.scss';

function AddCrud(){
         const [addname, addingName]=useState("");
         const [addage, addingAge]=useState(0);
         // for get users
         const [users, setUsers]= useState([]);
         const usersCollectionRef = collection(db, "users");
        // for adding users
        const createUser=async()=>{
          await addDoc(usersCollectionRef, {name: addname, age:Number(addage)});
        };
        
     return(
        <Base>
            <div className="addcrud">

            <h3>
              Add Crud
            </h3>
            
            <div className="addcrud-form">
                
            <input 
                    type="text"
                    placeholder="Name..."
                    onChange={(event)=>{
                        addingName(event.target.value);
                    }}
                     />
                    <input 
                    type="number"
                    placeholder="Age..."
                    onChange={(event)=>{
                        addingAge(event.target.value);
                        
                    }}
                     />
                    <button className="btn btn-success" onClick={createUser}>Add</button>
            </div>
            </div>
    
        </Base>
     );
}
export default AddCrud;