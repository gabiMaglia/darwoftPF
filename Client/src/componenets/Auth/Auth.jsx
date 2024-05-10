import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useModal from "../../hooks/useModal";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
import ForgetPasswordForm from "../forms/ForgetPasswordForm";
import ConfirmationForm from "../forms/ConfirmationForm";
import Spinner from "../ui/LoadingSpinner/Spinner";

import styles from "./auth.module.css";

//
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logInAsync, logOutAsync } from "../../redux/slices/authSlice";
import {
  sendMailToResetPassword,
  signUpUser,
} from "../../services/authServices/authServices";
import PATH_ROUTES from "../../helpers/routes.helper";

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
  // const dispatch = useDispatch();
  
  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, openModal, closeModal] = useModal();


  const handleLogInSubmit = (values) => {
    setIsLoading(true);
    dispatch(logInAsync(values))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
    }).catch((error) => {
        console.log(error);
      });
  };
  const handleLogOutSubmit = (token) => {
    console.log("llego");
    setIsLoading(true);
    navigate(PATH_ROUTES.HOME);
    dispatch(logOutAsync(token)).then(() => {
      setIsLoading(false);
      closeModal();
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleSubmitResetPassword = async ({ email }) => {
    setIsLoading(true);
    sendMailToResetPassword(email).then(() => {
      setIsLoading(false);
      closeModal();
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className={styles.authPanel}>
      {auth.user ? (
        <>
          <Link to={PATH_ROUTES.DASHBOARD}>
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
              okTitle = 'Si' 
              onSubmit={() => handleLogOutSubmit(token)}
              canceTitle = 'Un rato mas!'
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
