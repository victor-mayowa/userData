import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import api from "../api/data";

const ContactList = ({ contacts, setContacts }) => {

  // Gets the data from API
  const retrieveData = async () => {
    const response = await api.get("/users");
    return response.data.data.data;
  };

  ///this is for getting data from api
  useEffect(() => {
    const getAllData = async () => {
      const allData = await retrieveData();
      if (allData) setContacts(allData);
    };

    getAllData();
  }, [contacts]);
  
  const renderedContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} onClickHandler key={contact.id} />;
  });

  return (
    <div className="ui celled list">
      <h2>
        Contact List
        <Link to="./add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      {renderedContactList}
    </div>
  );
};

export default ContactList;
