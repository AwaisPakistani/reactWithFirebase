import React, { useState, useEffect } from "react";
import "./home.styles.scss";
import Base from "../../components/base/base.component";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
            collection,
            getDocs,
            addDoc,
            deleteDoc,
            updateDoc,
            doc,
       } from "firebase/firestore";



function Home(){
        
         // for get users
         const [users, setUsers]= useState([]);
         const usersCollectionRef = collection(db, "users");
        // for update
        const [editname, setEditName]=useState("");
        const [editAge, setEditAge]=useState(0);
        const updateUserDetail=async(id,name,age)=>{
          const userDoc=doc(db, "users", id);
           const newFields={name:editname,age:editAge};
           updateDoc(userDoc, newFields);
        };
        // update age users
        const updateUser=async(id,age)=>{
           const userDoc=doc(db, "users", id);
           const newFields={age:age+1};
           updateDoc(userDoc, newFields);
        };
        const inputEditName=(event)=>{
            event.preventDefault();
            setEditName(event.target.value);
        }
        const inputEditAge=(event)=>{
            event.preventDefault();
            setEditAge(event.target.value);
        }
        
        // for deleting users
        const deleteUser=async(id)=>{
            const userDoc=doc(db,"users",id);
            await deleteDoc(userDoc);
         };
        const [count, setCount]=useState(1);
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
                         <span className="btn btn-primary">
                            <Link to="/addcrud">
                              Add New
                            </Link>
                        </span>
                        
                </div>
                
            </div>

            <div className="body-area">

                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,count)=>{
                                
                                    return (

                                    <tr>
                                    <th scope="row">
                                        
                                        {count+1}
                                    </th>
                                    <td><input type="text"
                                    placeholder={user.name}
                                    onChange={inputEditName}
                                    /></td>
                                    <td><input type="number"
                                    placeholder={user.age}
                                    onChange={inputEditAge}
                                    /></td>
                                    <td className="action-buttons">
                                        <button onClick={updateUserDetail(user.id)} className="btn btn-warning">
                                            Edit
                                        </button>
                                        
                                       
                                        <button onClick={()=>{
                                            updateUser(user.id, user.age);
                                        }} className="btn btn-success">
                                            Age+1
                                        </button>
                                        <button onClick={()=>{
                                            deleteUser(user.id);
                                        }} className="btn btn-danger" >
                                            Delete
                                        </button>
                                        <Link to={'/updaeuser/'+user.id}>
                            About
                        </Link>
                                        
                                    </td>
                                    </tr>
                                    );
                                
                                }
                                
                                )
                            }
                           
                        </tbody>
                </table>
            </div>
           </div>

           </Base>
        );
    
}

export default Home;