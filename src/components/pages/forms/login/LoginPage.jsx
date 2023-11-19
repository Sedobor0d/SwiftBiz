import { Form, Formik } from "formik";
import * as yup from 'yup';

import styles from '../formsPage.module.css'
import email from '../images/icon/mail.svg'
import lockoff from '../images/icon/lock-off.svg'
import lockopen from '../images/icon/lock-open.svg'
import { Link, useNavigate } from "react-router-dom";
import { MyInput } from "../../../UI/inputBox/MyInput";
import { InputPass } from "../../../UI/inputBox/InputPass";
import { useContext } from "react";
import { authContext } from "../../../hoc/AuthProvider";
import Notification from "../../../utils/helpers/notification/Notification";

const LoginPage = ({ users, message, setMessage }) => {
   const userContext = useContext(authContext);
   const navigate = useNavigate();

   const findUser = ({ email, password }) => {
      return users.find((user) => user.email === email && user.password === password);
   };

   const authUser = (obj) => {
      const user = findUser(obj);
      if (!user) {
         setMessage('Пользователь не найден')
         return
      }
      userContext.login()
      navigate('/');
   }

   const validationScheme = yup.object().shape({
      email: yup.string().required('Введите почту').email('email введен не в правильном формате'),
      password: yup.string().required('Введите пароль').min(8, 'Пароль должен состоять минимум из 8 символов'),
   });

   return (
      <Formik
         validationSchema={validationScheme}
         initialValues={{
            email: '',
            password: '',
         }}
         onSubmit={(values) => authUser(values)}
      >
         <Form>
            <h2 className={styles.headerForm}>Авторизация</h2>
            <Notification message={message} setMessage={setMessage} />
            <MyInput
               labelText={'Электронная почта'}
               fieldName={'email'}
               fieldType={'text'}
               icon={email}
            />
            <InputPass
               labelText={'Пароль'}
               fieldName={'password'}
               fieldType={'password'}
               iconOne={lockoff}
               iconTwo={lockopen}
            />

            <button
               className={styles.btn}
               type="submit"
            >
               Войти
            </button>

            <div className={styles.linkAuth}>

               <p>Нет аккаунта?{' '}
                  <Link
                     to='/register'
                     className={styles.link}
                  >
                     Регистрация
                  </Link>
               </p>

            </div>
         </Form>
      </Formik>
   );
};

export default LoginPage;