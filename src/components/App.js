//this app uses api to store and gets its data
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContactFunc from "./AddContact";
import ContactDetail from "./ContactDetail";
import DeletePage from "./DeletePage";
import EditContact from "./EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContactFunc />} />
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/deletePage/:id"
            element={
              <DeletePage contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/edit"
            element={
              <EditContact contacts={contacts} setContacts={setContacts} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
