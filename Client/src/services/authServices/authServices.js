import {axiosInstance, axiosAuthInstance} from "../../utils/axiosConfig";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

const signUpUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post(`${URL}/auth/singup`, { userData });
    if (data.error) {
      toast.error(data.message);
      return false;
    }
    toast(
      `Usuario ${data.response.user} creado correctamente, chekea la casilla${data.response.email} para activar tu cuenta y poder empezar a comprar`
    );
    return true;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return false;
  }
};

const loginUser = async (loginData) => {
  try {
    const { email, password } = loginData;
    const { data } = await axiosInstance.post(`${URL}/auth/login`, { email, password });
    if (data.error) {
      toast.error(data.message);
      return;
    }
    toast.success("Inicio de sesión correcto");
    return data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Error de conexión";
    toast.error(message);
    return null;
  }
};

const logOutUser = async () => {
  try {
    await axiosAuthInstance.post(`${URL}/auth/logout`, null);
    return true;
  } catch (error) {
    toast.error("Error al cerrar sesión");
    return false;
  }
};

const persistanceCheck = async () => {
  try {
    const response = await axiosAuthInstance.get(`${URL}/auth/persistanceCheck`);
    return response;
  } catch (error) {
    return false;
  }
};

const sendMailToResetPassword = async (email) => {
  try {
    await axiosInstance.get(`${URL}/auth/mailtoreset/${email}`);
    toast.success("Email enviado, chekee su casilla de correo");
    return true;
  } catch (error) {
    toast.error("Error al enviar el mail");
    return false;
  }
};

const sendNewPasswordToReset = async (token, password) => {
  try {
    await axiosInstance.post(`${URL}/auth/changepassword/${token}`, { password });
    toast.success("Password correctamente actualizado");
    return true;
  } catch (error) {
    toast.error("Error al resetear el password");
    return false;
  }
};

export {
  signUpUser,
  loginUser,
  logOutUser,
  sendMailToResetPassword,
  sendNewPasswordToReset,
  persistanceCheck,
};
