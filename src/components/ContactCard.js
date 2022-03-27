import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const onClickHandler = () => {
    props.onClickHandler(id);
    // console.log(id,"contactCard")
  };

  const { id, name, title, location } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{title}</div>
        <div>{location}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => onClickHandler(id)}
      ></i>

      <i
        className="edit alternate outline icon"
        style={{ color: "blue" }}
        onClick={() => onClickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
