import ReactDOM from "react-dom";

import { XCircleIcon } from "@heroicons/react/24/solid";

import styles from "./modal.module.css";

export const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <section>
      <div className={styles.modalOverlay}></div>

      <article className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <XCircleIcon className={styles.closeButton} onClick={onClose} />
        </div>
        {children}
      </article>
    </section>,
    document.body
  );
};

export default Modal;
