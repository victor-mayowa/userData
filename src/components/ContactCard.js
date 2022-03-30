import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  // const onClickHandler = () => {
  //   props.onClickHandler(id);
  //   // console.log(id,"contactCard")
  // };

  const { id, name, title, location } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{title}</div>
          <div>{location}</div>
        </Link>
      </div>
      {/* <i 
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => onClickHandler(id)}
      ></i> */}
      <Link to={`/deletePage/${id}`} state={{ id: { id } }}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red" }}
        ></i>
      </Link>

      <Link to= "/edit" state={{ data: props.contact}}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
