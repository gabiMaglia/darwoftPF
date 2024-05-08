import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInAsync, logOutAsync } from "../redux/slices/authSlice";
import {
  sendMailToResetPassword,
  signUpUser,
} from "../services/authServices/authServices";

const useAuth = () => {

  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem('token')
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    console.log('llego')
    setIsLoading(true);
    navigate('/')
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
  return [token, auth, isLoading, modalType, openModal, closeModal, handleLogInSubmit, handleSignUpSubmit, handleLogOutSubmit, handleSubmitResetPassword ]
}

export default useAuth