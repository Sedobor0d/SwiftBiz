import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
   const isAuthenticated = localStorage.getItem('isLoggedIn');
   let isAuth = isAuthenticated === 'true'

   const [isLoggedIn, setIsLoggedIn] = useState(isAuth || false);

   useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn.toString());
   }, [isLoggedIn]);

   const login = () => {
      setIsLoggedIn(true);
   };

   const logout = () => {
      setIsLoggedIn(false);
   };

   const value = { isLoggedIn, login, logout }
   return (
      <authContext.Provider value={value}>
         {children}
      </authContext.Provider>
   )
}