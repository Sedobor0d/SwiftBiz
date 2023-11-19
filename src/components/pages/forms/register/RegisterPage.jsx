import { Form, Formik } from "formik";
import * as yup from 'yup';

import styles from '../formsPage.module.css'
import email from '../images/icon/mail.svg'
import lockoff from '../images/icon/lock-off.svg'
import lockopen from '../images/icon/lock-open.svg'
import { Link, useNavigate } from "react-router-dom";
import { MyInput } from "../../../UI/inputBox/MyInput";
import { InputPass } from "../../../UI/inputBox/InputPass";
import userPromise from "../../../../services/userPromise";
import Notification from "../../../utils/helpers/notification/Notification";

const RegisterPage = ({ users, setUsers, message, setMessage }) => {
   const navigate = useNavigate();

   const findUser = ({ email, password }) => {
      return users.find((user) => user.email === email && user.password === password);
   };

   const registerUser = (obj) => {
      const user = findUser(obj);
      if (user) {
         setMessage('Такой пользователь уже есть')
      } else {
         setUsers(users.concat(obj))
         navigate('/login');
         // userPromise
         //    .register(obj)
         //    .then(newUser => {
         //       setUsers(users.concat(newUser))
         //    })
      }
   }

   const validationScheme = yup.object().shape({
      email: yup.string().required('Введите почту').email('email введен не в правильном формате'),
      password: yup.string().required('Введите пароль'),
   });

   return (
      <Formik
         validationSchema={validationScheme}
         initialValues={{
            email: '',
            password: '',
         }}
         onSubmit={(values) => registerUser(values)}
      >
         <Form >
            <h2 className={styles.headerForm}>Регистрация</h2>
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
               Зарегистрироваться
            </button>

            <div className={styles.linkAuth}>
               <p>Есть аккаунт?{' '}
                  <Link
                     to='/login'
                     className={styles.link}
                  >
                     Авторизация
                  </Link>
               </p>
            </div>
         </Form>
      </Formik>
   );
};

export default RegisterPage;