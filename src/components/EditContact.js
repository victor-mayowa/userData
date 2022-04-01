import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../api/data";
// import { Link } from "react-router-dom";

const EditContact = ({contacts, setContacts}) => {
  const locate = useLocation();

  const [name, setName] = useState(locate.state.data.name);
  const [title, setTitle] = useState(locate.state.data.title);
  const [location, setLocation] = useState(locate.state.data.location);

  const navigate = useNavigate();

  const editContactHandler = async (e) => {
    e.preventDefault();

    if (name === "" || title === "" || location === "") {
      alert("fill all the inputs");
      return;
    }

    const contact = {
      name,
      title,
      location,
    };

    // console.log(contact);

    const response = await api.put(`/user/${locate.state.data.id}`, contact);

    console.log(response);

   setContacts(
     contacts.map((contact) => {
        return contact.id === locate.state.data.id
          ? { ...response.data.data.data }
          : contact;
      })
    );

    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add contact</h2>
      <form className="ui form" onSubmit={editContactHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditContact;
