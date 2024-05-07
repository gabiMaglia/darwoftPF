import { useState } from "react";
import { Link } from "react-router-dom";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import ForgetPasswordForm from "../forms/ForgetPasswordForm";
import ConfirmationForm from "../forms/ConfirmationForm";
import { useDispatch, useSelector } from "react-redux";
import { logInAsync, logOutAsync } from "../../redux/slices/authSlice";
import {
  sendMailToResetPassword,
  signUpUser,
} from "../../services/authServices/authServices";
import Spinner from "../ui/LoadingSpinner/Spinner";

import styles from "./auth.module.css";
import toast from "react-hot-toast";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [modalType, setModalType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleLogInSubmit = async (values) => {
    setIsLoading(true);
    dispatch(logInAsync(values)).then((e) => {
      setIsLoading(false);
      if (!e.error) closeModal();
    });
  };
  const handleSignUpSubmit = async (values) => {
    setIsLoading(true);
    const response = await signUpUser(values);
    if (!response.error) {
      setIsLoading(false);
      closeModal();
    }
    setIsLoading(false);
  };
  const handleLogOutSubmit = async (token) => {
    setIsLoading(true);
    dispatch(logOutAsync(token)).then((e) => {
      if (!e.error) closeModal();
      setIsLoading(false);
    });
  };

  const handleSubmitResetPassword = async ({ email }) => {
    setIsLoading(true);
    sendMailToResetPassword(email).then((e) => {
      if(e){
        toast.success("Email enviado, chekee su casilla de correo");
      }
      closeModal();
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.authPanel}>
      {auth.user ? (
        <>
          <Link to={`/profile`}>
            <OutlinedButton className={styles.btn}>
              {auth.user?.firstName}
            </OutlinedButton>
          </Link>

          <OutlinedButton
            onClick={() => openModal("logout")}
            className={styles.btn}
          >
            Desconectar
          </OutlinedButton>

          <Modal
            title={"Realmente desea cerrar sesión?"}
            isOpen={modalType === "logout"}
            onClose={closeModal}
          >
            <ConfirmationForm
              onSubmit={() => handleLogOutSubmit(auth.token)}
              onCancel={closeModal}
            />
          </Modal>
        </>
      ) : (
        <>
          {/* LOGIN */}
          <OutlinedButton
            onClick={() => openModal("login")}
            className={styles.btn}
          >
            Ingresar
          </OutlinedButton>
          <Modal
            title="Ingresa"
            isOpen={modalType === "login"}
            onClose={closeModal}
          >
            <LoginForm onSubmit={handleLogInSubmit} />

            <i onClick={() => openModal("forget")} className={styles.forget}>
              ¿Olvidaste tu contraseña?
            </i>
          </Modal>
          <Modal
            title="Olvidaste tu contrasena"
            isOpen={modalType === "forget"}
            onClose={closeModal}
          >
            <ForgetPasswordForm onSubmit={handleSubmitResetPassword} />
          </Modal>

          {/* SIGNUP */}
          <OutlinedButton
            onClick={() => openModal("signup")}
            className={styles.btn}
          >
            Registrarse
          </OutlinedButton>
          <Modal
            title="Regístrate"
            isOpen={modalType === "signup"}
            onClose={closeModal}
          >
            <SignUpForm onSubmit={handleSignUpSubmit} />
          </Modal>
        </>
      )}
      {isLoading && <Spinner />}
    </div>
  );
};

export default Auth;
