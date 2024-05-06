import { useState } from "react";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

import styles from "./auth.module.css";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

import { useDispatch, useSelector } from "react-redux";
import { logInAsync, logOut } from "../../redux/slices/authSlice";
import { signUpUser } from "../../services/authServices/authServices";

const Auth = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleLogInSubmit = async (values) => {
    dispatch(logInAsync(values));
    setIsLogInModalOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logOut());

  };
  const handleSignUpSubmit = async (values) => {
    await signUpUser(values)
    
    setIsSignUpModalOpen(false);
  };

  return (
    <div className={styles.authPanel}>
      {auth.user ? (
        <>
          <OutlinedButton className={styles.btn}>
            {auth.user?.firstName}
          </OutlinedButton>

          <OutlinedButton onClick={handleLogOut} className={styles.btn}>
            Desconectar
          </OutlinedButton>
        </>
      ) : (
        <>
          <OutlinedButton
            onClick={() => setIsLogInModalOpen(true)}
            className={styles.btn}
          >
            Ingresar
          </OutlinedButton>

          <Modal
            title="Ingresa"
            isOpen={isLogInModalOpen}
            onClose={() => setIsLogInModalOpen(false)}
          >
            <LoginForm onSubmit={handleLogInSubmit} />
            <hr />
            <a href="">olvidaste tu contrasena?</a>
          </Modal>

          <OutlinedButton
            onClick={() => setIsSignUpModalOpen(true)}
            className={styles.btn}
          >
            Registrarse
          </OutlinedButton>

          <Modal
            title="Registrate"
            isOpen={isSignUpModalOpen}
            onClose={() => setIsSignUpModalOpen(false)}
          >
            <SignUpForm onSubmit={handleSignUpSubmit} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Auth;
