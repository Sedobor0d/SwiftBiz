import { ErrorMessage, Field } from "formik";
import { useRef } from "react";

import styles from './inputBox.module.css'

export const MyInput = ({ labelText, fieldName, fieldType, icon }) => {
   const ref = useRef();

   const handleFocus = (e) => {
      ref.current.focus();
   };

   return (
      <div className={styles.inputBox} onClick={handleFocus}>
         <div className={styles.box}>
            <label htmlFor={fieldName} className={styles.label}>{labelText}</label>
            <Field
               className={styles.field}
               name={fieldName}
               type={fieldType}
               id={fieldName}
               innerRef={ref}
            />
            <div className={styles.blockError}>
               <ErrorMessage name={fieldName} component="span" className={styles.error} />
            </div>
         </div>
         <div className={styles.icon}>
            <img src={icon} alt="icon" />
         </div>
      </div>
   );
};