import { useDispatch, useSelector } from "react-redux";
import ChangePasswordForm from "../../../../componenets/forms/ProfileForm/ChangePasswordForm";
import Modal from "../../../../componenets/ui/Modal/Modal";
import {
  deleteUserAsync,
  updateUserAsync,
} from "../../../../redux/slices/authSlice";
import useModal from "../../../../hooks/useModal";

import OutlinedButton from "../../../../componenets/ui/OutlinedButton/OutlinedButton";
import ConfirmationForm from "../../../../componenets/forms/ConfirmationForm";

import styles from "../profile.module.css";

const ProfileCredentials = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [modalType, openModal, closeModal] = useModal();

  return (
    <article className={styles.dataBox}>
      <div className={styles.header}>
        <h3>Credenciales/Cuenta</h3>
      </div>
      <div className={styles.content}>
        <h3>Estado de cuenta</h3>
        <p className={user.isActive ? styles.active : styles.notActive}>
          {user.isActive ? "Activada" : "Desactivada"}
        </p>
        <h3>Contrasenas</h3>
        <div className={styles.buttons}>
          <OutlinedButton onClick={() => openModal("changePassword")}>
            Cambiar contrasena de ingreso
          </OutlinedButton>
          <OutlinedButton onClick={() => openModal("deleteAccount")}>
            Eliminar cuenta
          </OutlinedButton>
        </div>
      </div>

      <Modal
        title={
          "Realmente desea eliminar su cuenta?, Sea conciente que esta accion no tiene vuelta atras"
        }
        isOpen={modalType === "deleteAccount"}
        onClose={closeModal}
      >
        <ConfirmationForm
          okTitle="Si"
          onSubmit={() => dispatch(deleteUserAsync())}
          canceTitle="No mejor no!"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        title={"Cambia tu contrasena"}
        isOpen={modalType === "changePassword"}
        onClose={closeModal}
      >
        <ChangePasswordForm
          okTitle="Si"
          onSubmit={(value) => {
            dispatch(updateUserAsync(value));
            closeModal();
          }}
          canceTitle="no"
          onCancel={closeModal}
        />
      </Modal>
    </article>
  );
};

export default ProfileCredentials;
