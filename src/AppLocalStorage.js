//this app uses local storage to store its data
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Pages/Header";
// import AddContact from "./AddContactClass";
import ContactList from "./ContactList";
import AddContactFunc from "./AddContactFunc";
import ContactDetail from "./ContactDetail";
import DeletePage from "./DeletePage";
import EditContact from "./EditContact"

const App = () => {
  //local storage key
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // console.log(contact)
    // setContacts(contact) this will return an error cause contact is an array and we are mapping over it, we cannot map if it is not an array
    // setContacts([contact]) this replace the old data(data present in the contact array) with new ones which is not what we want, so we use the rest operator(...)

    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  //i created a seperate component for deleting
  /// for deleting an item
  //   const removeContactHandler = (id) => {
  //     const newContactList = contacts.filter((contact) => {
  //       return contact.id !== id;
  //     });
  //     // console.log(newContactList )
  //     setContacts(newContactList);
  //   };

  
/// for editing an item
const editContactHandler = (contact) =>{
  console.log(contact)
}

/// for deleting an item
  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    // console.log(newContactList )
    setContacts(newContactList);
  };

  ///this is for getting data from local storage
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
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
            exact
            element={<AddContactFunc addContactHandler={addContactHandler} />}
          />

          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                // getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/deletePage/:id"
            element={<DeletePage removeContact={removeContact} />}
          />
          <Route path="/edit" element={<EditContact editContactHandler={editContactHandler}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
