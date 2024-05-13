import { useSelector, useDispatch } from "react-redux";
import Img from "../../../componenets/ui/Img/Img";
import foto from "../../../assets/profile.jpg";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import styles from "./profile.module.css";
import Modal from "../../../componenets/ui/Modal/Modal";
import useModal from "../../../hooks/useModal";
import PersonalDataForm from "../../../componenets/forms/ProfileForm/PersonalDataForm";
import AdressForm from "../../../componenets/forms/ProfileForm/AdressForm";
import ChangePasswordForm from "../../../componenets/forms/ProfileForm/ChangePasswordForm";
import { updateUserAsync } from "../../../redux/slices/authSlice";
import { formatInitialDateToShow } from "../../../utils/date";

const Profile = () => {
  const  user  = useSelector((state) => state.auth.user);
  
  const dispatch = useDispatch();


  const [modalType, openModal, closeModal] = useModal();



  return (
    <>
      <section className={styles.userDataChart}>
        <span className={styles.photo}>
          <Img img={foto} alt={user.firstName} />
        </span>
        <div className={styles.userCharts}>
          <article>
            <h3>Datos personales</h3>
            <span>
              <label>Nombre</label>
              <p>{user.firstName}</p>
            </span>
            <span>
              <label>Apellido</label>
              <p>{user.lastName}</p>
            </span>
            <span>
              <label>Documento de identidad</label>
              <p>{user.dni}</p>
            </span>
            <span>
              <label>Fecha de Nacimiento</label>
              <p>{formatInitialDateToShow(user.birthday)}</p>
            </span>
            <span>
              <label>Nacionalidad</label>
              <p>{user.nationality}</p>
            </span>
            <PencilSquareIcon
              className={styles.icon}
              onClick={() => openModal("updatePersonalData")}
            />
          </article>

          <article>
            <h3>Direccion de facturacion/entrega</h3>
            <span>
              <label>Pais</label>
              <p>{`${user.adress?.country || "Completar"}`}</p>
            </span>
            <span>
              <label>Estado/Provincia</label>
              <p>{`${user.adress?.state || "Completar"}`}</p>
            </span>
            <span>
              <label>Ciudad</label>
              <p>{`${user.adress?.city || "Completar"}`}</p>
            </span>
            <span>
              <label>Calle</label>
              <p>{`${user.adress?.street || "Completar"}`}</p>
            </span>
            <span>
              <label>Altura</label>
              <p>{`${user.adress?.number || "Completar"}`}</p>
            </span>
            <span>
              <label>Codigo Postal</label>
              <p>{`${user.adress?.zipCOde || "Completar"}`}</p>
            </span>
            <PencilSquareIcon
              className={styles.icon}
              onClick={() => openModal("updateContactData")}
            />
          </article>
        </div>
      </section>
      {/* PERSONALDATA */}
      <Modal
        title={"Edita tu informacion personal"}
        isOpen={modalType === "updatePersonalData"}
        onClose={closeModal}
      >
        <PersonalDataForm
          initialData={user}
          onCancel={closeModal}
          okTitle="Si"
          canceTitle="no"
          onSubmit={(userId, value) => {
            dispatch(updateUserAsync(userId, value));
            closeModal();
          }}
          />
      </Modal>
      {/* ADDRESS */}
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
      {/* CHANGEEPASS */}
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
    </>
  );
};

export default Profile;
