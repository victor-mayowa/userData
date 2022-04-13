import React, { createContext, useState } from "react";

const StoredContext = createContext({});

export const StoredContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const context={
    contacts,setContacts
  }
  return <StoredContext.Provider value={context}>{children}</StoredContext.Provider>;
};

export default StoredContext;
