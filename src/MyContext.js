import { createContext, useContext } from "react";

export const MyContext = createContext();

export const useMyValue = () => {
  return useContext(MyContext);
};