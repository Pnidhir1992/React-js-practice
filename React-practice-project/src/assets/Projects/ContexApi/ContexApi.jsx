import { createContext, useContext } from "react";
import "./contex.css";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const Myname = "Nidhir";
  const MyAge = 30;
  const MyEmail = "nidhir@gmail.com";
  return (
    <BioContext.Provider value={{ Myname, MyAge, MyEmail }}>
      {children}
    </BioContext.Provider>
  );
};

//custome hooks

export const useBioContext = () => {
  const context = useContext(BioContext);
  return context;
};
