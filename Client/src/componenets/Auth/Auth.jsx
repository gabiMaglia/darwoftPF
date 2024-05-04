import { useState } from "react";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

import styles from "./auth.module.css";
import Modal from "../ui/Modal/Modal";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

const Auth = () => {
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleLogInSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.tardet));
    setIsLogInModalOpen(false);
  };
  const handleSignUpSubmit = (e) => {
    console.log(new FormData(e.tardet));
    setIsSignUpModalOpen(false);
  };
  return (
    <>
      <div className={styles.authPanel}>
        <span onClick={() => setIsLogInModalOpen(true)}>
          <OutlinedButton className={styles.btn}>Login</OutlinedButton>
        </span>
        <Modal
        title='Log in'
        isOpen={isLogInModalOpen}
        onSubmit={handleLogInSubmit}
        onClose={() => setIsLogInModalOpen(false)}
        >
          <LoginForm />
        </Modal>

        <span onClick={() => setIsSignUpModalOpen(true)}>
          <OutlinedButton className={styles.btn}>SingUp</OutlinedButton>
        </span>
        <Modal
          title='SignIn'
          isOpen={isSignUpModalOpen}
          onSubmit={handleSignUpSubmit}
          onClose={() => setIsSignUpModalOpen(false)}
        >
          <SignUpForm />
        </Modal>
      </div>
    </>
  );
};

export default Auth;
