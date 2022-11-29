import React, { useEffect, useState } from "react";
import Base from "../../components/base/base.component";
import "./home.styles.scss";
import { db } from "../../firebase/firebase";
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";
import { async } from "@firebase/util";

function Home(){
        // for adding users
        const [newName, setNewName]= useState("");
        const [newAge, setNewAge]= useState(0);
        // for get users
        const [users, setUsers]= useState([]);
        const usersCollectionRef=collection(db, "users");
        // for adding users
        const createUser=async()=>{
           await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
        };
        // for deleting users
        const deleteUser=async(id)=>{
           const userDoc=doc(db,"users",id);
           await deleteDoc(userDoc);
        };
        // for get users
        useEffect(()=>{
        const getUsers=async()=>{
          const data= await getDocs(usersCollectionRef);
          //console.log(data);
          setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        };
         getUsers();
        },[]);

        return(
           <Base>
           <div className="container master">

            <div className="upper-area">
                <div className="add-button">
                         <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#formAdd" aria-expanded="false" aria-controls="formAdd">
                            Add New +
                        </button>
                </div>
                
            </div>


            <div className="formArea" id="formAdd">
                    <input 
                    placeholder="Name..."
                    onChange={(event)=>{
                        setNewName(event.target.value);
                    }} />
                    <input 
                    placeholder="Age..."
                    onChange={(event)=>{
                        setNewAge(event.target.value);
                    }} />
                    <button className="btn btn-success" onClick={createUser}>Add</button>
                </div>
            <div className="body-area">

                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=>{
                                    return (

                                    <tr>
                                    <th scope="row">1</th>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td className="action-buttons">
                                        <button className="btn btn-success">
                                            Edit
                                        </button>
                                        <button onClick={()=>{
                                            deleteUser(user.id);
                                        }} className="btn btn-danger" >
                                            Delete
                                        </button>
                                    </td>
                                    </tr>
                                    );
                                })
                            }
                           
                        </tbody>
                </table>
            </div>
           </div>

           </Base>
        );
    
}

export default Home;