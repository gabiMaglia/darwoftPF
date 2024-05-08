import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import OutlinedButton from "../../componenets/ui/OutlinedButton/OutlinedButton";

import styles from "./changePassword.module.css";
import { sendNewPasswordToReset } from "../../services/authServices/authServices";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const confirmPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    )
    .required("Debes ingresar un password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "El password debe coincidir")
    .required("Debes confirmar la contrasena"),
});


const ChangePassword = () => {
  const navigate = useNavigate()
  const {token} = useParams()

  const handleSubmit = async({password}) => {

    await sendNewPasswordToReset(token, password).then((e)=> {
      {
        console.log(e)
        toast.success('Password correctament actualizado')
        navigate('/')
      }
    }).catch((error)=> {
      console.log(error)
    })
  }

  return (
    <section className={styles.changePasswordContainer}>
      <h2>Ingresa la nueva contrasena</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          photo: "",
          birthday: new Date("1990-01-01"),
          nacionality: "",
          dni: "",
          password: "",
          confirmPassword: "",
          adress: {},
        }}
        validationSchema={confirmPasswordSchema}
        onSubmit={(values) => {
          // aqui el service para cambiar pass
          handleSubmit(values)
        }}
      >
   {({ errors, touched  }) => (
          <Form className={styles.form}>
         
            <span className={styles.inputBoxes}>
            <label htmlFor="password">Password</label>  
            <Field name="password" type="password" />
            {errors.password && touched.password ? <p className={styles.errors}>{errors.password}</p> : null}
            </span>
            
            <span className={styles.inputBoxes}>
            <label htmlFor="confirmPassword">Confirmar Password</label>  
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? <p className={styles.errors}>{errors.confirmPassword}</p> : null}
            </span>

            <div className={styles.submitButtons}>
              <OutlinedButton> Enviar </OutlinedButton>
            </div>

          </Form>
        )}


      </Formik>
    </section>
  );
};

export default ChangePassword;
