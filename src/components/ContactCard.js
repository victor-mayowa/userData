import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import "./css/ContactCard.css";

const ContactCard = (props) => {
  const { id, name, title, location } = props.contact;
  return (
    <div className="item">
      <div className="main-content">
        <img className="image" src={user} alt="user" />
        <div className="content">
          <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
            <div className="header"><h4>{name}</h4></div>
            <div><p>{title}</p></div>
            <div><p>{location}</p></div>
          </Link>
        </div>
      </div>

      <div className="buttons">
        <Link to={`/deletePage/${id}`} state={{ id: { id } }}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </Link>

        <Link to="/edit" state={{ data: props.contact }}>
          <i className="fas fa-edit"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
