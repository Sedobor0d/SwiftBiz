import styles from './notification.module.css'

const Notification = ({ message, setMessage }) => {
   if (message === null) {
      return <div className={styles.message}></div>
   }

   setTimeout(() => {
      setMessage(null)
   }, 5000)

   return (
      <div className={styles.message}>
         {message}
      </div>
   )
}

export default Notification 