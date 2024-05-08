import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import ForgetPasswordForm from "../forms/ForgetPasswordForm";
import ConfirmationForm from "../forms/ConfirmationForm";
import Spinner from "../ui/LoadingSpinner/Spinner";

import { checkPersistanceAsync } from "../../redux/slices/authSlice.js";

import useAuth from "../../hooks/useAuth.jsx";
import useModal from "../../hooks/useModal.jsx";

import styles from "./auth.module.css";

//

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logInAsync, logOutAsync } from "../../redux/slices/authSlice";
import {
  sendMailToResetPassword,
  signUpUser,
} from "../../services/authServices/authServices";

const Auth = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const [
  //   token,
  //   auth,
  //   handleLogInSubmit,
  //   handleSignUpSubmit,
  //   handleLogOutSubmit,
  //   handleSubmitResetPassword,
  // ] = useAuth();
  // const [modalType, openModal, closeModal] = useModal();
  // const dispatch = useDispatch();

  
  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleLogInSubmit = (values) => {
    setIsLoading(true);
    dispatch(logInAsync(values)).then(() => {
      setIsLoading(false);
    });
  };
  const handleSignUpSubmit = (values) => {
    setIsLoading(true);
    signUpUser(values).then((e) => {
      if (e) {
        setIsLoading(false);
        closeModal();
      }
      setIsLoading(false);
    });
  };
  const handleLogOutSubmit = (token) => {
    console.log("llego");
    setIsLoading(true);
    navigate("/");
    dispatch(logOutAsync(token)).then(() => {
      setIsLoading(false);
      closeModal();
    });
  };

  const handleSubmitResetPassword = async ({ email }) => {
    setIsLoading(true);
    sendMailToResetPassword(email).then(() => {
      setIsLoading(false);
      closeModal();
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
              onSubmit={() => handleLogOutSubmit(token)}
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
            <ForgetPasswordForm
              onSubmit={handleSubmitResetPassword}
              onCancel={closeModal}
            />
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
