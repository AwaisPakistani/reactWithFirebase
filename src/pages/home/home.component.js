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
import Users from "../../components/users/users.component";



function Home(){
        
         
        return(
           <Base>
           <div className="container master">
              <Users/>
           </div>

           </Base>
        );
    
}

export default Home;