import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../api/data";

const DeletePage = ({ contacts, setContacts }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id.id;

  const deleteContact = async (id) => {
    await api.delete(`/user/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h4>Are you sure you want to Delete</h4>
      <button className="ui button green" onClick={() => deleteContact(id)}>
        Yes
      </button>
      <Link to="/">
        <button className="ui button red">No</button>
      </Link>
    </div>
  );
};
export default DeletePage;
