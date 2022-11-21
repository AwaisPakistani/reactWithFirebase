import React from "react";
import { Link } from "react-router-dom";
import Base from "../../components/base/base.component";
function About(){
  return(
    <Base>
      <h1>About Page</h1>
      <Link to='/'>Back to Home</Link>
    </Base>
    
  )
}
export default About;