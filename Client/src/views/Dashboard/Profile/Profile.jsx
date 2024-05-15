import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Img from "../../../componenets/ui/Img/Img";
import foto from "../../../assets/defaultAvatar.jpg";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Modal from "../../../componenets/ui/Modal/Modal";
import useModal from "../../../hooks/useModal";
import { updateUserAsync } from "../../../redux/slices/authSlice";
import ChangePictureForm from "../../../componenets/forms/ProfileForm/ChangePictureForm";
import OutlinedButton from "../../../componenets/ui/OutlinedButton/OutlinedButton";
import PATH_ROUTES from "../../../helpers/routes.helper";
import styles from "./profile.module.css";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [modalType, openModal, closeModal] = useModal();

  return (
    <>
      <section className={styles.userDataChart}>
        <div className={styles.col1}>
          <div>
            <span className={styles.photo}>
              <Img img={user.photo || foto} alt={user.firstName} />
              <PencilSquareIcon
                onClick={() => openModal("changePicture")}
                className={styles.icon}
              />
            </span>
              <h2>{user.firstName} {user.lastName}</h2>
          </div>
          <nav>
            <ul className={styles.links}>
              <li>
                <OutlinedButton>
                <Link to={PATH_ROUTES.PERSONALDATA}>Informacion Personal</Link>
                </OutlinedButton>
              </li>
              <li>
                <OutlinedButton>
                <Link to={PATH_ROUTES.PERSONALADDRESS}>
                  Contact Information
                </Link>
                </OutlinedButton>
              </li>
              <li>
              <OutlinedButton>
                <Link to={PATH_ROUTES.PERSONALCREDENTIALS}>Credenciales/Cuenta</Link>
              </OutlinedButton>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.col2}>
          <Outlet></Outlet>
        </div>

        <Modal
          title={"Cambia tu Imagen"}
          isOpen={modalType === "changePicture"}
          onClose={closeModal}
        >
          <ChangePictureForm
            okTitle="Subir imagen"
            onSubmit={(value) => {
              console.log({ ...user, value });
              dispatch(updateUserAsync({ id: user._id, userData: value }));
              closeModal();
            }}
            canceTitle="Cancelar"
            onCancel={closeModal}
          />
        </Modal>
      </section>
    </>
  );
};

export default Profile;
