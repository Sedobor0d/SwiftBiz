import { useContext } from 'react';
import styles from './homePage.module.css';
import { authContext } from '../../hoc/AuthProvider';

const HomePage = () => {
   const authUser = useContext(authContext);

   const handleLogOut = () => {
      authUser.logout()
   }

   return (
      <section className={styles.block}>
         <div className={styles.container}>
            <h2>Добро пожаловать!</h2>
            <button className={styles.btn} onClick={handleLogOut}>Выйти</button>
         </div>
      </section>
   );
};

export default HomePage;