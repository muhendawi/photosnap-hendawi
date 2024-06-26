import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

function Modal({ setIsModal }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          setIsModal(false);
          document.body.style.overflow = "auto";
        }}
      ></div>
      <div className={styles.modal}>
        <IoClose
          className={styles.closeBtn}
          size={30}
          onClick={() => {
            setIsModal(false);
            document.body.style.overflow = "auto";
          }}
        />
        <h1>Under Construction 🚧</h1>
      </div>
    </div>
  );
}

export default Modal;
