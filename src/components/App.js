import React, { useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";

// import { BrowserRouter } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/data";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  //local storage key
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //RetrieveData
  const retrieveData = async () => {
    const response = await api.get("/users");
    console.log(response.data.data.data);
    return response.data.data.data;
  };

  const addContactHandler = async (contact) => {
    // console.log(contact)
    // setContacts(contact) this will return an error cause contact is an array and we are mapping over it, we cannot map if it is not an array
    // setContacts([contact]) this replace the old data(data present in the contact array) with new ones which is not what we want, so we use the spread operator(...)

    // setContacts([...contacts, { id: uuid(), ...contact }]);

    const response = await api.post("/user", contact);
    setContacts([...contacts, response.data.data.data]);
  };

  /// for deleting an item
  const removeContactHandler = async(id) => {
    console.log(id, "App")
    await api.delete(`/users/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    // console.log(newContactList )
    setContacts(newContactList);
  };

  ///this is for getting data from local storage and api
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllData = async () => {
      const allData = await retrieveData();
      if (allData) setContacts(allData);
    };

    getAllData();
    // retrieveData()
  }, []);

  ///this is for storing data in the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            // element={(props) => (
            //   <AddContact {...props} addContactHandler={addContactHandler} />
            // )}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
            // element={(props) => (
            //   <ContactList
            //     {...props}
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />
            // )}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
