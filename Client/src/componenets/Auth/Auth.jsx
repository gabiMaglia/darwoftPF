import { useState } from "react";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

import styles from "./auth.module.css";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

const Auth = () => {
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleLogInSubmit = (values) => {
    console.log(values);
    setIsLogInModalOpen(false);
  };
  const handleSignUpSubmit = (values) => {
    console.log(values);
    setIsSignUpModalOpen(false);
  };
  return (
    <>
      <div className={styles.authPanel}>
        <span onClick={() => setIsLogInModalOpen(true)}>
          <OutlinedButton className={styles.btn}>Login</OutlinedButton>
       
        </span>
        <Modal
          title="Log in"
          isOpen={isLogInModalOpen}
          onClose={() => setIsLogInModalOpen(false)}
        >
          <LoginForm onSubmit={handleLogInSubmit} />
          <hr />
         <a href="">olvidaste tu contrasena?</a>
        </Modal>

        <span onClick={() => setIsSignUpModalOpen(true)}>
          <OutlinedButton className={styles.btn}>SingUp</OutlinedButton>
        </span>
        <Modal
          title="SignIn"
          isOpen={isSignUpModalOpen}
          onClose={() => setIsSignUpModalOpen(false)}
        >
          <SignUpForm onSubmit={handleSignUpSubmit} />
        </Modal>
      </div>
    </>
  );
};

export default Auth;
