import { ErrorMessage, Field } from "formik";
import { useRef, useState } from "react";

import styles from './inputBox.module.css'

export const InputPass = ({ labelText, fieldName, fieldType, iconOne, iconTwo }) => {
   const ref = useRef();
   const [visibleIcon, setVisibleIcon] = useState(false);

   const handleVisibilityIcon = () => {
      setVisibleIcon(prevState => !prevState);
   };

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
               type={visibleIcon ? 'text' : fieldType}
               id={fieldName}
               innerRef={ref}
               autocomplete={fieldName}
            />
            <div className={styles.blockError}>
               <ErrorMessage name={fieldName} component="span" className={styles.error} />
            </div>
         </div>
         <div className={styles.icon} onClick={handleVisibilityIcon} >
            {!visibleIcon ? (
               <img src={iconOne} alt="icon" />
            ) : (
               <img src={iconTwo} alt="icon" />
            )}
         </div>
      </div>
   );
};