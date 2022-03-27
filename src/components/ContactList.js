import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteClickHandler = (id) => {
    // console.log(id, "contactList");
    props.getContactId(id);
  };

  const renderedContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        onClickHandler={deleteClickHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui celled list">
      <h2>
        Contact List
        <Link to="./add">
        <button className="ui button blue right">Add Contact</button></Link>
      
      </h2>
      {renderedContactList}
    </div>
  );
};

export default ContactList;
