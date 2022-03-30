import React, { useEffect } from "react";
import user from "../images/user.jpg";
import { Link, useParams, useLocation } from "react-router-dom";

const ContactDetail = () => {
    // const{id, state} = useParams()
    // console.log(id)
    // console.log(state)
   const locate = useLocation()
//    useEffect(()=>{
//        console.log(location)
//    },[])
console.log(locate)
const {name,title, location} = locate.state.contact
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{title}</div>
          <div className="description">{location}</div>
        </div>
        <Link to="/">
          <button>Back to list</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
