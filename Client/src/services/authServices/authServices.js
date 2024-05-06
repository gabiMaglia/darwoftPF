import axios from "axios";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

const signUpUser = async (userData) => {
  try {
    const { data } = await axios.post(`${URL}/auth/singup`, {
      userData,
    });
    !data.error &&
      toast.success(
        `Usuario ${data.response.user} creado correctamente, chekea la casilla${data.response.email} para activar tu cuenta y poder comprar`
      );
    return true;
  } catch ({ response }) {
    toast.error(JSON.stringify(response.data.errors) || response.data.message);
  }
};

const loginUser = async (loginData) => {
  try {
    const { email, password } = loginData;
    const { data } = await axios.post(`${URL}/auth/login`, {
      email: email,
      password: password,
    });
    if (data.error) return toast.error(data.message);
    
    toast.success('Inicio de sesion correcto')
    return data;
  } catch ({ response }) {
     toast.error(response.data.message);
  }
};

export { signUpUser, loginUser };
