import { Navigate } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { useContext } from "react";


const RequireAuth = ({ children }) => {
   const { isLoggedIn } = useContext(authContext);


   if (isLoggedIn === false) {
      return (
         <>
            <Navigate to='login' />
         </>
      )
   }

   return children;
};

export { RequireAuth };