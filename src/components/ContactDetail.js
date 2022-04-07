import React from "react";
import user from "../images/user.jpg";
import { Link, useLocation } from "react-router-dom";
import "./css/ContactDetail.css";

const ContactDetail = () => {
  const locate = useLocation();

  console.log(locate);
  const { name, title, location } = locate.state.contact;
  return (
    <div className="mainContainer">
      <div className="content">
        <div className="profilePics">
          <img src={user} alt="user" className="user" />
        </div>
        <div className="text">
          <div><h4>{name}</h4></div>
          <div><p>{title}</p></div>
          <div><p>{location}</p></div>

          <Link to="/">
          <button className="back">Back to list</button>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default ContactDetail;
