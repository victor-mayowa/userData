//this app uses api to store and gets its data
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/data";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContactFunc from "./AddContactFunc";
import ContactDetail from "./ContactDetail";
import DeletePage from "./DeletePage";
import EditContact from "./EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Gets the data from API
  const retrieveData = async () => {
    const response = await api.get("/users");
    console.log(response.data.data.data);
    return response.data.data.data;
  };

  //for adding contacts   POSTING
  const addContactHandler = async (contact) => {
    console.log(contact)
    const response = await api.post("/users", contact);
    setContacts([...contacts, response.data.data.data]);
  };




  
//for editing the item
  const editContactHandler = async (contact, locate) => {
    console.log(contact)
    const response = await api.put(`/user/${locate.state.data.id}`, contact);
    console.log(response);
    setContacts(contacts.map((contact)=>{
      return contact.id === locate.state.data.id ? {...response.data.data.data} : contact
    }))
  };

  /// for deleting an item
  const removeContact = async (id) => {
    // console.log(id, "App")
    await api.delete(`/user/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    // console.log(newContactList )
    setContacts(newContactList);
  };

  ///this is for getting data from api
  useEffect(() => {
    const getAllData = async () => {
      const allData = await retrieveData();
      if (allData) setContacts(allData);
    };

    getAllData();
    retrieveData();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
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
          <Route
            path="/edit"
            element={<EditContact  editContactHandler={editContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
