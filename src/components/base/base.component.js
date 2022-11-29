import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const Base=({children})=>(

   <div>
      <Header/>
        {children}
      <Footer />
   </div>
);

export default Base;