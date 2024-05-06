import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import styles from "./forms.module.css";
import paises from "../../utils/paises";
import { useState } from "react";

const signUpSchema = Yup.object({
  firstName: Yup.string()
  .min(3)
  .required("Debes ingresar un nombre"),
  lastName: Yup.string()
  .min(3)
  .required("Debes ingresar un apellido"),
  nacionality: Yup.string(),
  // .min(3)
  // .required("Debes ingresar un nacionalidad"),
  email: Yup.string()
    .email("Email invalido")
    .required("Debes ingresar un email"),
  password: Yup.string()
    // .min(6)
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    //   "La contrasena debe tener al menos una letra mayuscula, una minuscula y un numero"
    // )
    .required("Debes ingresar un password"),
   confirmPassword: Yup.string() 
   .oneOf([Yup.ref('password'), null], 'El password debe coincidir')
   .required("Debes confirmar la contrasena"),
});

const SignUpForm = ({ onSubmit }) => {
  const [nacionality, setNacionality] = useState ('')
  const handleResetForm = (formik) => {
    formik.resetForm();
    setNacionality('')
  }
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          photo: '',
          birthday: new Date('1990-01-01'),
          nacionality: '',
          dni: '',
          password: '',
          adress:{}
        }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          values = {... values, nacionality : nacionality }
          onSubmit(values)}
        }
      >
        {({ errors, touched, resetForm  }) => (
          <Form className={styles.form}>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Nombre</label>  
            <Field name="firstName"  />
            {errors.firstName && errors.firstName ? <p className={styles.errors}>{errors.firstName}</p> : null}
            </span>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Apellido</label>  
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? <p className={styles.errors}>{errors.lastName}</p> : null}
            </span>

            <span className={styles.inputBoxes}>
            <label htmlFor="">Nacionalidad</label>  
            <Field as="select" name="nationality" onChange= {(e) => {setNacionality(e.target.value)}} >
              <option  disabled value=''>Seleccione su nacionalidad</option>
              {paises.map(pais => (
                <option key={Math.random()} value={pais.toString()}>{pais}</option>
              ))}
              </Field >
            {errors.nacionality && touched.nacionality ? <p className={styles.errors}>{errors.nacionality}</p> : null}
            </span>
          
            <span className={styles.inputBoxes}>
            <label htmlFor="">Documento de Identidad</label>  
            <Field name="dni" />
            {errors.dni && touched.dni ? <p className={styles.errors}>{errors.dni}</p> : null}
            </span>
            
            {/* CRED */}
            <span className={styles.inputBoxes}>
            <label htmlFor="">Email</label>  
            <Field name="email" type="email" />
            {errors.email && touched.email ? <p className={styles.errors}>{errors.email}</p> : null}
            </span>
         
            <span className={styles.inputBoxes}>
            <label htmlFor="">Password</label>  
            <Field name="password" type="password" />
            {errors.password && touched.password ? <p className={styles.errors}>{errors.password}</p> : null}
            </span>
            
            <span className={styles.inputBoxes}>
            <label htmlFor="">Confirmar Password</label>  
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? <p className={styles.errors}>{errors.confirmPassword}</p> : null}
            </span>

            <div className={styles.submitButtons}>
              <OutlinedButton type='submit'>Registrarse</OutlinedButton>
              <OutlinedButton onClick={() => handleResetForm({ resetForm })}>Limpiar datos</OutlinedButton>
            </div>

          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
