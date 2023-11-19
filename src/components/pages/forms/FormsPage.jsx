import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './formsPage.module.css'
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import UserPromise from '../../../services/userPromise';
import db from '../../../db.json';

const FormsPage = () => {
   const location = useLocation();

   const [users, setUsers] = useState(null)
   const [message, setMessage] = useState('')

   useEffect(() => {
      setUsers(db.users)
      // UserPromise
      //    .getUsers()
      //    .then(initialPerson => {
      //       setUsers(initialPerson)
      //    })
   }, [])

   return (
      <section className={styles.forms}>
         <div className={styles.container}>
            {location.pathname === '/login' ?
               <LoginPage
                  users={users}
                  message={message}
                  setMessage={setMessage}
               /> :
               location.pathname === '/register' ?
                  <RegisterPage
                     users={users}
                     setUsers={setUsers}
                     message={message}
                     setMessage={setMessage}
                  />
                  : null
            }
         </div>
      </section>
   );
};

export default FormsPage;