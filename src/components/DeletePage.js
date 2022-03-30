import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const DeletePage = (props) => {
    const navigate = useNavigate()

  const location = useLocation();

  console.log(location);

  const id = location.state.id.id

  console.log(id)
  
  const deleteContact = (id) =>{
      props.removeContact(id)
      navigate("/add")
  }
  return (
    <div className="ui main">
      <h4>Are you sure you want to Delete</h4>
      <button className="ui button green" onClick={()=> deleteContact(id)}>Yes</button>
<Link to="/">
<button className="ui button red">No</button>
</Link>
     
    </div>
  );
};
export default DeletePage;
