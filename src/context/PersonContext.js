import { createContext, useState } from "react";

export const PersonContext = createContext({});

const PersonContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);

  return (
    <PersonContext.Provider value={{ persons, setPersons }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
