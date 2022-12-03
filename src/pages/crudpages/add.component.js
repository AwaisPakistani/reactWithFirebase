import React from "react";
import Base from "../../components/base/base.component";
import AddCrud from "../../components/addcrud/addcrud.component";
class AddUsers extends React.Component{
    render(){
        return(
            <Base>
              <AddCrud />
            </Base>

        );
    }
}
export default AddUsers;