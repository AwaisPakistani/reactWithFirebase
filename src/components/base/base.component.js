import React from "react";
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