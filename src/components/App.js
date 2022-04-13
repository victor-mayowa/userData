//this app uses api to store and gets its data
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import DeletePage from "./DeletePage";
import EditContact from "./EditContact";
import { StoredContextProvider } from "./store/StoredContext";

const App = () => {
  return (
    <div className="container">
      <StoredContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/add" element={<AddContact />} />

            <Route path="/" element={<ContactList />} />

            <Route path="/contact/:id" element={<ContactDetail />} />

            <Route path="/deletePage/:id" element={<DeletePage />} />

            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </Router>
      </StoredContextProvider>
    </div>
  );
};

export default App;
