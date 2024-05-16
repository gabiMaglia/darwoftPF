import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { formatInitialDateToShow } from "../../../../utils/date";
import { capitalizeFirstLetter } from "../../../../utils/strings";

import { useDispatch, useSelector } from "react-redux";
import useModal from "../../../../hooks/useModal";
import Modal from "../../../../componenets/ui/Modal/Modal";
import PersonalDataForm from "../../../../componenets/forms/ProfileForm/PersonalDataForm";
import { updateUserAsync } from "../../../../redux/slices/authSlice";

import styles from "../profile.module.css";

const ProfilePersonalData = () => {
  const user = useSelector((state) => state.auth.user);
  const [modalType, openModal, closeModal] = useModal();
  const dispatch = useDispatch();

  return (
    <article className={styles.dataBox}>
      <div className={styles.header}>
        
        <h3>Datos personales</h3>
        <PencilSquareIcon
          className={styles.icon}
          onClick={() => openModal("updatePersonalData")}
        />
      </div>
      <div className={styles.content}>
        <span>
          <label>Documento de identidad</label>
          <i>{user?.dni}</i>
        </span>
        <span>
          <label>Fecha de Nacimiento</label>
          <i>{formatInitialDateToShow(user?.birthday)}</i>
        </span>
        <span>
          <label>Nacionalidad</label>
          <i>{capitalizeFirstLetter(user?.nationality)}</i>
        </span>
      </div>

      <Modal
        title={"Edita tu información personal"}
        isOpen={modalType === "updatePersonalData"}
        onClose={closeModal}
      >
        <PersonalDataForm
          initialData={user}
          onCancel={closeModal}
          okTitle="Si"
          canceTitle="No"
          onSubmit={(userId, value) => {
            dispatch(updateUserAsync(userId, value));
            closeModal();
          }}
        />
      </Modal>
    </article>
  );
};

export default ProfilePersonalData;
