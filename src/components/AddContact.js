import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../api/data";
import "./css/AddContact.css";

const AddContactFunc = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const addDataHandler = async (e) => {
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
    //put all the input values inside an object
    // console.log(contact)

    setName("");
    setTitle("");
    setLocation("");
    //this is use to empty the inputs

    // setContacts(contact);
    //update my state with the contacts

    const request = {
      name: contact.name,
      title: contact.title,
      location: contact.location,
    };
    //then pass my contact to another object, this not really necessary

    await api.post("/user", request);
    // console.log(response)
    navigate("/");
  };
  return (
    <>
      <div className="AppContainer">
        <div className="AddHeader">
          <h2 className="header_one">Add contact</h2>
         
        </div>

        <form className="ui form" onSubmit={addDataHandler}>
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
          <div className="flex">
          <button className="ui button blue">Add</button>
          <Link to="/">
            <button className="ui button black">List</button>
          </Link>
          </div>
         
        </form>
      </div>
    </>
  );
};
export default AddContactFunc;
