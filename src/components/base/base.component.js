import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Base=({children})=>(

   <div>
      <Header/>
        {children}
      <Footer />
   </div>
);

export default Base;