import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import api from "../api/data";
import "./css/contactList.css";

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
    <div className="AppContainer">
      <div className="flexContainer">
        <div>
          <h2 className="header_one">Contact List</h2>
        </div>

        <Link to="./add">
          <button className="add">Add Contact</button>
        </Link>
      </div>

      {renderedContactList}
    </div>
  );
};

export default ContactList;
