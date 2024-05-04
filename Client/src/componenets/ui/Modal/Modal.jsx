import ReactDOM from 'react-dom'
import OutlinedButton from '../OutlinedButton/OutlinedButton'
import {XCircleIcon} from "@heroicons/react/24/solid"
import styles from './modal.module.css'

export const Modal = ({title, isOpen, onClose, onSubmit, children}) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <section>
      
      <div className={styles.modalOverlay}>
      </div>

        <article className={styles.modalContent}>
          
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
            <XCircleIcon className={styles.closeButton} onClick={onClose} />
        </div>
          
          <form className={styles.modalForm} onSubmit={onSubmit}>
           
            {children}

            <div className={styles.submitButtons}>
              <OutlinedButton onClick={onSubmit} >Submit</OutlinedButton>
              <OutlinedButton onClick={onClose} >Cancel</OutlinedButton>
            </div>
         
          </form>
        
        </article>
      
    </section>
      ,

    document.body
  );
}

export default Modal