import { useDispatch, useSelector } from "react-redux";
import styles from "../profile.module.css";
import useModal from "../../../../hooks/useModal";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Modal from "../../../../componenets/ui/Modal/Modal";
import AdressForm from "../../../../componenets/forms/ProfileForm/AdressForm";
import { updateUserAsync } from "../../../../redux/slices/authSlice";

const ProfilePersonalAddress = () => {
  const user = useSelector((state) => state.auth.user);
  const [modalType, openModal, closeModal] = useModal();
  const dispatch = useDispatch();
  return (
    <article className={styles.dataBox}>
      <div className={styles.header}>
        
        <h3>Direccion de facturacion/entrega</h3>
        
      </div>
      <div className={styles.content}>
        
        <span>
          <label>Pais</label>
          <i>{`${user.adress?.country || "Completar"}`}</i>
        </span>
        <span>
          <label>Estado/Provincia</label>
          <i>{`${user.adress?.state || "Completar"}`}</i>
        </span>
        <span>
          <label>Ciudad</label>
          <i>{`${user.adress?.city || "Completar"}`}</i>
        </span>
        <span>
          <label>Calle</label>
          <i>{`${user.adress?.street || "Completar"}`}</i>
        </span>
        <span>
          <label>Altura</label>
          <i>{`${user.adress?.number || "Completar"}`}</i>
        </span>
        <span>
          <label>Codigo Postal</label>
          <i>{`${user.adress?.zipCOde || "Completar"}`}</i>
        </span>
      </div>
      <PencilSquareIcon
        className={styles.icon}
        onClick={() => openModal("updateContactData")}
      />

      <Modal
        title={"Edita tu informacion de contacto"}
        isOpen={modalType === "updateContactData"}
        onClose={closeModal}
      >
        <AdressForm
          initialData={user}
          canceTitle="no"
          onCancel={closeModal}
          okTitle="Si"
          onSubmit={(userId, value) => {
            dispatch(updateUserAsync(userId, value));
            closeModal();
          }}
        />
      </Modal>
    </article>
  );
};

export default ProfilePersonalAddress;
