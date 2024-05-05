import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import styles from "./forms.module.css";
import paises from "../../utils/paises";

const logInSchema = Yup.object({
  firstName: Yup.string()
  .min(3)
  .required("Debes ingresar un nombre"),
  lastName: Yup.string()
  .min(3)
  .required("Debes ingresar un apellido"),
  nacionality: Yup.string()
  .min(3)
  .required("Debes ingresar un nacionalidad"),
  email: Yup.string()
    .email("Email invalido")
    .required("Debes ingresar un email"),
  password: Yup.string()
    .min(6)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    )
    .required("Debes ingresar un password"),
   confirmPassword: Yup.string() 
   .oneOf([Yup.ref('password'), null], 'El password debe coincidir')
});
const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          photo: '',
          birthday: '',
          nacionality: '',
          dni: '',
          password: '',
          adress:{}
        }}
        validationSchema={logInSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Nombre</label>  
            <Field name="firstName"  />
            {errors.firstName && errors.firstName ? <div>{errors.firstName}</div> : null}
            </span>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Apellido</label>  
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
            </span>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Nacionalidad</label>  
            <Field as="select" name="nationality" >
              {paises.map(pais => (
                <option key={Math.random()} value={pais}>{pais}</option>
              ))}
              </Field >
            {errors.nacionality && touched.nacionality ? <div>{errors.nacionality}</div> : null}
            </span>
          
            <span className={styles.inputBoxes}>
            <label htmlFor="">DNI</label>  
            <Field name="dni" />
            {errors.dni && touched.dni ? <div>{errors.dni}</div> : null}
            </span>
            
            <span className={styles.inputBoxes}>
            <label htmlFor="">Email</label>  
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </span>
         

            <span className={styles.inputBoxes}>
            <label htmlFor="">Password</label>  
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </span>
            
            <span className={styles.inputBoxes}>
            <label htmlFor="">Confirmar Password</label>  
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
            </span>

            <div className={styles.submitButtons}>
              <OutlinedButton type='submit' >Submit</OutlinedButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
